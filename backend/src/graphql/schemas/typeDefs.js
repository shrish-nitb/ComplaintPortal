export const typeDefs = `#graphql
    scalar DateTime

    type Application {
        reference_id: String!
        title: String
        subject: String
        type: String
        description: String
        plantiff_name: String
        plantiff_address: String
        plantiff_ward_number: Int
        plantiff_mobile: String
        plantiff_email: String
        plantiff_citizenship_id: String
        plantiff_father_name: String
        plantiff_grandfather_name: String
        defendant_name: String
        defendant_address: String
        defendant_ward_number: Int
        defendant_mobile: String
        defendant_email: String
        defendant_citizenship_id: String
        defendant_father_name: String
        defendant_grandfather_name: String
        created_at: DateTime
        updated_at: DateTime
        application_status: [ApplicationStatus]
        case_status: [CaseStatus]
    }

    input CreateApplicationInput {
        title: String
        subject: String
        type: String
        description: String
        plantiff_name: String
        plantiff_address: String
        plantiff_ward_number: Int
        plantiff_mobile: String
        plantiff_email: String
        plantiff_citizenship_id: String
        plantiff_father_name: String
        plantiff_grandfather_name: String
        defendant_name: String
        defendant_address: String
        defendant_ward_number: Int
        defendant_mobile: String
        defendant_email: String
        defendant_citizenship_id: String
        defendant_father_name: String
        defendant_grandfather_name: String
    }

    input UpdateApplicationInput {
        title: String
        subject: String
        type: String
        description: String
        plantiff_name: String
        plantiff_address: String
        plantiff_ward_number: Int
        plantiff_mobile: String
        plantiff_email: String
        plantiff_citizenship_id: String
        plantiff_father_name: String
        plantiff_grandfather_name: String
        defendant_name: String
        defendant_address: String
        defendant_ward_number: Int
        defendant_mobile: String
        defendant_email: String
        defendant_citizenship_id: String
        defendant_father_name: String
        defendant_grandfather_name: String                     
    }

    type ApplicationStatus {
        application_status_id: Int!
        reference_id: String
        status: String
        comment: String
        editor_name: String
        editor_email: String
        editor_mobile: String
        created_at: DateTime!
        updated_at: DateTime!
    }

    input CreateApplicationStatusInput {
        reference_id: String
        status: String
        comment: String
        editor_name: String
        editor_email: String
        editor_mobile: String
    }

    type CaseStatus {
        case_status_id: Int!
        reference_id: String!
        status: String
        comment: String
        member_id: Int
        hearing_time: DateTime
        hearing_location: String
        editor_name: String
        editor_email: String
        editor_mobile: String
        created_at: DateTime!
        updated_at: DateTime!
    }

    input CreateCaseStatusInput {
        reference_id: String!
        status: String
        comment: String
        member_id: Int
        hearing_time: DateTime
        hearing_location: String
        editor_name: String
        editor_email: String
        editor_mobile: String
    }

    enum Role {
        ADMIN
        MEDIATOR
        WARD_MEMBER
    }

    type Query {
        getApplication(reference_id: String!, WithApplicationStatus: Boolean, WithCaseStatus: Boolean): Application
        listApplications: [Application]
    }

    type Mutation {
        createApplication(input: CreateApplicationInput!): Application!
        updateApplication(reference_id: String!, input: UpdateApplicationInput!): Application!
        deleteApplication(reference_id: String!): Boolean!
        createApplicationStatus(input: CreateApplicationStatusInput!): ApplicationStatus!
        createCaseStatus(input: CreateCaseStatusInput!): CaseStatus!
    }


`
