import { Ability, AbilityBuilder, detectSubjectType, PureAbility } from '@casl/ability'

// Define rules for current user
export const defineRulesFor = (user) => {
	const { can, rules } = new AbilityBuilder(Ability)
	if (user?.role) {
		switch (user.role) {
			case 'admin':
				can('manage', 'all')
				break
			case 'teacher':
				can(['read', 'create'], 'Exam')
				can(['update, delete'], 'Exam', { createdBy: user.id })
				break
			case 'student':
				can('read', 'Exam')
				can('read', 'ExamResult', { takenBy: user.id })
				break
			default:
				break
		}
	} else {
		can('read', 'Exam')
	}

	return rules
}

// Detect subject type by subject.type
const detectAppSubjectType = (subject) => {
	if (subject && typeof subject === 'object' && subject.type) {
		return subject.type
	}

	return detectSubjectType(subject)
}

// Build ability for current user with rules to detected subject
export const buildAbilityFor = (user) => {
	return new Ability(defineRulesFor(user), {
		detectSubjectType: detectAppSubjectType,
	})
}
