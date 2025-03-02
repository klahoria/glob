var DataTypes = require("sequelize").DataTypes;
var _access_menu_map = require("./access_menu_map");
var _access_roles = require("./access_roles");
var _ach_cron_payment_history = require("./ach_cron_payment_history");
var _ach_payments = require("./ach_payments");
var _ad_campaign = require("./ad_campaign");
var _admin_access_control = require("./admin_access_control");
var _admin_device = require("./admin_device");
var _admin_notes = require("./admin_notes");
var _admin_notifications = require("./admin_notifications");
var _admin_otp = require("./admin_otp");
var _admin_pf_action_type = require("./admin_pf_action_type");
var _admin_pf_notes = require("./admin_pf_notes");
var _admin_profile = require("./admin_profile");
var _admin_profile_dummy = require("./admin_profile_dummy");
var _admin_request_notes = require("./admin_request_notes");
var _admin_requests = require("./admin_requests");
var _admin_schedule = require("./admin_schedule");
var _admin_settings = require("./admin_settings");
var _admin_training_links = require("./admin_training_links");
var _agent_departments = require("./agent_departments");
var _agent_device = require("./agent_device");
var _agent_notes = require("./agent_notes");
var _agent_profile = require("./agent_profile");
var _all_patient_financing = require("./all_patient_financing");
var _all_patient_plans = require("./all_patient_plans");
var _amreen_new_table = require("./amreen_new_table");
var _answers = require("./answers");
var _apf_token_whitelabel = require("./apf_token_whitelabel");
var _api_response_time = require("./api_response_time");
var _app_access_menu_map = require("./app_access_menu_map");
var _app_menu_items = require("./app_menu_items");
var _app_version = require("./app_version");
var _app_version_notes = require("./app_version_notes");
var _apps_devices = require("./apps_devices");
var _ar_bsa_form = require("./ar_bsa_form");
var _ar_plans = require("./ar_plans");
var _ar_plans_bulk_uploads = require("./ar_plans_bulk_uploads");
var _ar_plans_email_logs = require("./ar_plans_email_logs");
var _ar_plans_errors = require("./ar_plans_errors");
var _arrangements = require("./arrangements");
var _arrangements_history = require("./arrangements_history");
var _arv2_notes = require("./arv2_notes");
var _authorization_table = require("./authorization_table");
var _auto_ssn_update = require("./auto_ssn_update");
var _aws_translation_json = require("./aws_translation_json");
var _baa_document = require("./baa_document");
var _baa_document_backup = require("./baa_document_backup");
var _backup1_doctor_referrals = require("./backup1_doctor_referrals");
var _balance_logs = require("./balance_logs");
var _balance_transactions = require("./balance_transactions");
var _bank_reminder = require("./bank_reminder");
var _banks = require("./banks");
var _bc_status = require("./bc_status");
var _bot_fallbacks = require("./bot_fallbacks");
var _bot_intents = require("./bot_intents");
var _bot_logs = require("./bot_logs");
var _bot_pages = require("./bot_pages");
var _bot_synonyms = require("./bot_synonyms");
var _bounced_emails = require("./bounced_emails");
var _brochures = require("./brochures");
var _bulk_upload_records = require("./bulk_upload_records");
var _business_challenge_payments = require("./business_challenge_payments");
var _business_financing_logs = require("./business_financing_logs");
var _business_invitations = require("./business_invitations");
var _business_notifications = require("./business_notifications");
var _business_payment_matrix = require("./business_payment_matrix");
var _business_preapproval_link = require("./business_preapproval_link");
var _business_refer_list = require("./business_refer_list");
var _business_referral_reminders = require("./business_referral_reminders");
var _business_referral_transactions = require("./business_referral_transactions");
var _business_referrals = require("./business_referrals");
var _buss_doc_types = require("./buss_doc_types");
var _buss_docs = require("./buss_docs");
var _callback_reasons = require("./callback_reasons");
var _canada_zipcodes = require("./canada_zipcodes");
var _canada_zipcodes2 = require("./canada_zipcodes2");
var _captcha_codes = require("./captcha_codes");
var _card_links = require("./card_links");
var _card_payment_history = require("./card_payment_history");
var _cash_adjustment_zero_percent = require("./cash_adjustment_zero_percent");
var _charge_generic_decline_error = require("./charge_generic_decline_error");
var _charge_refunds = require("./charge_refunds");
var _chatbot_fallbacks = require("./chatbot_fallbacks");
var _chatbot_feedback = require("./chatbot_feedback");
var _chatbot_logs = require("./chatbot_logs");
var _check_email_sent = require("./check_email_sent");
var _cheque = require("./cheque");
var _cities_extended = require("./cities_extended");
var _cities_extended2 = require("./cities_extended2");
var _claim_denied_reasons = require("./claim_denied_reasons");
var _claim_docs = require("./claim_docs");
var _claim_drafts = require("./claim_drafts");
var _claim_forms = require("./claim_forms");
var _claim_notes = require("./claim_notes");
var _claim_settings = require("./claim_settings");
var _claim_status = require("./claim_status");
var _claim_unpaid_pending_details = require("./claim_unpaid_pending_details");
var _clarity_records = require("./clarity_records");
var _cms_logs = require("./cms_logs");
var _cms_templates = require("./cms_templates");
var _cms_templates_types = require("./cms_templates_types");
var _collections_error = require("./collections_error");
var _collections_notes = require("./collections_notes");
var _community_forum = require("./community_forum");
var _completed_contract_unpaids = require("./completed_contract_unpaids");
var _connect_onboarding = require("./connect_onboarding");
var _contact_type = require("./contact_type");
var _contact_types = require("./contact_types");
var _contract_changes_request_actions = require("./contract_changes_request_actions");
var _contract_changes_requests = require("./contract_changes_requests");
var _contract_claim_stats = require("./contract_claim_stats");
var _contract_claim_stats_history = require("./contract_claim_stats_history");
var _contract_draft = require("./contract_draft");
var _contract_reminder = require("./contract_reminder");
var _contract_reminder_actions = require("./contract_reminder_actions");
var _contract_service_record = require("./contract_service_record");
var _countries = require("./countries");
var _country_transaction_fee = require("./country_transaction_fee");
var _critical_errors = require("./critical_errors");
var _crm_prospects = require("./crm_prospects");
var _crons_payments_emails = require("./crons_payments_emails");
var _csr_docs = require("./csr_docs");
var _csr_doctor_action_types = require("./csr_doctor_action_types");
var _csr_enterprise_action_types = require("./csr_enterprise_action_types");
var _csr_partner_action_types = require("./csr_partner_action_types");
var _csr_patient_action_types = require("./csr_patient_action_types");
var _csr_request_types = require("./csr_request_types");
var _csr_requests = require("./csr_requests");
var _csr_requests_notes = require("./csr_requests_notes");
var _custom_model_data = require("./custom_model_data");
var _customer_disputes = require("./customer_disputes");
var _customer_doc = require("./customer_doc");
var _customer_notifications = require("./customer_notifications");
var _customer_package_downloaders = require("./customer_package_downloaders");
var _customer_unsubscribe = require("./customer_unsubscribe");
var _date_change_request = require("./date_change_request");
var _debt_requests = require("./debt_requests");
var _deeplink_data = require("./deeplink_data");
var _deeplink_types = require("./deeplink_types");
var _demand_letters = require("./demand_letters");
var _demand_letters_stats = require("./demand_letters_stats");
var _denefit_panels = require("./denefit_panels");
var _denefits_links = require("./denefits_links");
var _denefits_logos = require("./denefits_logos");
var _denefits_payments = require("./denefits_payments");
var _denefits_reviews = require("./denefits_reviews");
var _denefits_testimonial_reviews = require("./denefits_testimonial_reviews");
var _denefits_training = require("./denefits_training");
var _denefits_training_details = require("./denefits_training_details");
var _denefits_visitor_history = require("./denefits_visitor_history");
var _denefits_visitors = require("./denefits_visitors");
var _departments = require("./departments");
var _designations = require("./designations");
var _dispute_document_type = require("./dispute_document_type");
var _dispute_documents = require("./dispute_documents");
var _dispute_reasons = require("./dispute_reasons");
var _disputes = require("./disputes");
var _doc_csv = require("./doc_csv");
var _doctor_ada = require("./doctor_ada");
var _doctor_agent_extended = require("./doctor_agent_extended");
var _doctor_agents = require("./doctor_agents");
var _doctor_alternate_contact = require("./doctor_alternate_contact");
var _doctor_alternate_emails = require("./doctor_alternate_emails");
var _doctor_alternate_mobile = require("./doctor_alternate_mobile");
var _doctor_bank = require("./doctor_bank");
var _doctor_captcha = require("./doctor_captcha");
var _doctor_device = require("./doctor_device");
var _doctor_device_old = require("./doctor_device_old");
var _doctor_dispute_documents = require("./doctor_dispute_documents");
var _doctor_extended = require("./doctor_extended");
var _doctor_feature = require("./doctor_feature");
var _doctor_financer = require("./doctor_financer");
var _doctor_financial_settings = require("./doctor_financial_settings");
var _doctor_instant_card = require("./doctor_instant_card");
var _doctor_location_manager = require("./doctor_location_manager");
var _doctor_missing_payments = require("./doctor_missing_payments");
var _doctor_notes = require("./doctor_notes");
var _doctor_partner_event_training_notes_status = require("./doctor_partner_event_training_notes_status");
var _doctor_partner_training_time_slots = require("./doctor_partner_training_time_slots");
var _doctor_pay_subscription = require("./doctor_pay_subscription");
var _doctor_payments = require("./doctor_payments");
var _doctor_payments_source = require("./doctor_payments_source");
var _doctor_payouts = require("./doctor_payouts");
var _doctor_phase_admin_logs = require("./doctor_phase_admin_logs");
var _doctor_phase_logs = require("./doctor_phase_logs");
var _doctor_phase_settings = require("./doctor_phase_settings");
var _doctor_popup_status = require("./doctor_popup_status");
var _doctor_profile = require("./doctor_profile");
var _doctor_profile_registration = require("./doctor_profile_registration");
var _doctor_profile_unregistered = require("./doctor_profile_unregistered");
var _doctor_referral_wallet = require("./doctor_referral_wallet");
var _doctor_referrals = require("./doctor_referrals");
var _doctor_referrals22 = require("./doctor_referrals22");
var _doctor_referrals_2 = require("./doctor_referrals_2");
var _doctor_register_otp = require("./doctor_register_otp");
var _doctor_registration_document = require("./doctor_registration_document");
var _doctor_report_request = require("./doctor_report_request");
var _doctor_settings = require("./doctor_settings");
var _doctor_signup_email_read_count = require("./doctor_signup_email_read_count");
var _doctor_speciality = require("./doctor_speciality");
var _doctor_subscription = require("./doctor_subscription");
var _doctor_subscription_1 = require("./doctor_subscription_1");
var _doctor_subscription_feature = require("./doctor_subscription_feature");
var _doctor_subscription_history = require("./doctor_subscription_history");
var _doctor_training = require("./doctor_training");
var _doctor_training_2 = require("./doctor_training_2");
var _doctor_training_notes = require("./doctor_training_notes");
var _doctor_transaction_fee = require("./doctor_transaction_fee");
var _doctor_transfers = require("./doctor_transfers");
var _doctor_verification = require("./doctor_verification");
var _doctor_verification_docs = require("./doctor_verification_docs");
var _doctor_verification_notes = require("./doctor_verification_notes");
var _document_types = require("./document_types");
var _draft_contract = require("./draft_contract");
var _draft_website = require("./draft_website");
var _edit_contract_adjustment = require("./edit_contract_adjustment");
var _edit_contract_records = require("./edit_contract_records");
var _email_details = require("./email_details");
var _email_error = require("./email_error");
var _email_error_webhook = require("./email_error_webhook");
var _email_history = require("./email_history");
var _email_product_configuration = require("./email_product_configuration");
var _email_records = require("./email_records");
var _email_request_details = require("./email_request_details");
var _email_response_details = require("./email_response_details");
var _email_templates = require("./email_templates");
var _email_templates_2 = require("./email_templates_2");
var _email_templates_dummy = require("./email_templates_dummy");
var _email_templates_language = require("./email_templates_language");
var _email_token = require("./email_token");
var _email_triggers_templates = require("./email_triggers_templates");
var _emails_sent = require("./emails_sent");
var _enterprise_access_menu_map = require("./enterprise_access_menu_map");
var _enterprise_access_roles = require("./enterprise_access_roles");
var _enterprise_admin_profile = require("./enterprise_admin_profile");
var _enterprise_device = require("./enterprise_device");
var _enterprise_location_types = require("./enterprise_location_types");
var _enterprise_menu_items = require("./enterprise_menu_items");
var _enterprise_profile = require("./enterprise_profile");
var _entities = require("./entities");
var _error_logs = require("./error_logs");
var _event_admin = require("./event_admin");
var _event_details = require("./event_details");
var _event_notes = require("./event_notes");
var _event_socket = require("./event_socket");
var _event_triggers = require("./event_triggers");
var _events = require("./events");
var _faq = require("./faq");
var _faq_categories = require("./faq_categories");
var _faq_tags = require("./faq_tags");
var _faq_tags_link = require("./faq_tags_link");
var _faq_types = require("./faq_types");
var _faq_v2 = require("./faq_v2");
var _faq_v2_bkp = require("./faq_v2_bkp");
var _feature_list = require("./feature_list");
var _file_upload_links = require("./file_upload_links");
var _finance_errors = require("./finance_errors");
var _financer_departments = require("./financer_departments");
var _financer_device = require("./financer_device");
var _financer_profile = require("./financer_profile");
var _financing_drafts = require("./financing_drafts");
var _financing_type = require("./financing_type");
var _firebase_events = require("./firebase_events");
var _global_email_logs = require("./global_email_logs");
var _global_errors = require("./global_errors");
var _global_logs = require("./global_logs");
var _guarantee_type = require("./guarantee_type");
var _guaranteed_logs = require("./guaranteed_logs");
var _guaranteed_recovery = require("./guaranteed_recovery");
var _imp_updates_stripe = require("./imp_updates_stripe");
var _industries = require("./industries");
var _inquiry_email_sent_records = require("./inquiry_email_sent_records");
var _instant_payout_support_banks = require("./instant_payout_support_banks");
var _institute_bank = require("./institute_bank");
var _institute_device = require("./institute_device");
var _institute_notifications = require("./institute_notifications");
var _institute_person = require("./institute_person");
var _institute_profile = require("./institute_profile");
var _institute_referrals = require("./institute_referrals");
var _internal_email = require("./internal_email");
var _invalid_email_cron = require("./invalid_email_cron");
var _invalid_email_logs = require("./invalid_email_logs");
var _late_fee_type = require("./late_fee_type");
var _late_fees = require("./late_fees");
var _lead_action_logs = require("./lead_action_logs");
var _lead_csv_error = require("./lead_csv_error");
var _lead_history = require("./lead_history");
var _lead_sources = require("./lead_sources");
var _lead_status = require("./lead_status");
var _leads = require("./leads");
var _location_manager_device = require("./location_manager_device");
var _location_manager_profile = require("./location_manager_profile");
var _logs_for_me = require("./logs_for_me");
var _marketing_notes = require("./marketing_notes");
var _mass_email_report = require("./mass_email_report");
var _master_events = require("./master_events");
var _menu_items = require("./menu_items");
var _menu_notes = require("./menu_notes");
var _micro_deposit_reminder = require("./micro_deposit_reminder");
var _missing_notes = require("./missing_notes");
var _missing_partial_recovery = require("./missing_partial_recovery");
var _mobile_template = require("./mobile_template");
var _more_documents = require("./more_documents");
var _multi_language = require("./multi_language");
var _new_features = require("./new_features");
var _non_guaranteed_reason = require("./non_guaranteed_reason");
var _notification_types = require("./notification_types");
var _old_email_templates = require("./old_email_templates");
var _open_api_webhook_subscribed = require("./open_api_webhook_subscribed");
var _openai_conversations = require("./openai_conversations");
var _openai_critical_errors = require("./openai_critical_errors");
var _openai_fallbacks = require("./openai_fallbacks");
var _openai_finetune_models = require("./openai_finetune_models");
var _openai_models = require("./openai_models");
var _openai_prompt_types = require("./openai_prompt_types");
var _openai_prompts = require("./openai_prompts");
var _openai_question_answer = require("./openai_question_answer");
var _openai_requests = require("./openai_requests");
var _openai_training_data = require("./openai_training_data");
var _orp_payment_values = require("./orp_payment_values");
var _otp_type = require("./otp_type");
var _panel_video_links = require("./panel_video_links");
var _partial_payments = require("./partial_payments");
var _partner_alternate_contacts = require("./partner_alternate_contacts");
var _partner_alternate_email = require("./partner_alternate_email");
var _partner_alternate_mobile = require("./partner_alternate_mobile");
var _partner_answers = require("./partner_answers");
var _partner_assets_files = require("./partner_assets_files");
var _partner_assets_folders = require("./partner_assets_folders");
var _partner_auth_token_mapping = require("./partner_auth_token_mapping");
var _partner_bank = require("./partner_bank");
var _partner_business_card = require("./partner_business_card");
var _partner_contract_share = require("./partner_contract_share");
var _partner_contract_share_doctor_settings = require("./partner_contract_share_doctor_settings");
var _partner_course_badges = require("./partner_course_badges");
var _partner_device = require("./partner_device");
var _partner_doctor_referrals = require("./partner_doctor_referrals");
var _partner_domains = require("./partner_domains");
var _partner_domains_dummy = require("./partner_domains_dummy");
var _partner_educational_email = require("./partner_educational_email");
var _partner_events = require("./partner_events");
var _partner_notes = require("./partner_notes");
var _partner_notifications = require("./partner_notifications");
var _partner_parents = require("./partner_parents");
var _partner_payments = require("./partner_payments");
var _partner_payouts = require("./partner_payouts");
var _partner_popup_status = require("./partner_popup_status");
var _partner_profile = require("./partner_profile");
var _partner_quiz_answers = require("./partner_quiz_answers");
var _partner_quiz_questions = require("./partner_quiz_questions");
var _partner_read_courses = require("./partner_read_courses");
var _partner_referrals = require("./partner_referrals");
var _partner_settings = require("./partner_settings");
var _partner_share = require("./partner_share");
var _partner_stripe_verification = require("./partner_stripe_verification");
var _partner_testimonials = require("./partner_testimonials");
var _partner_transfers = require("./partner_transfers");
var _partner_verification = require("./partner_verification");
var _partner_verification_docs = require("./partner_verification_docs");
var _partner_verification_links = require("./partner_verification_links");
var _partner_verification_notes = require("./partner_verification_notes");
var _partner_websites_shared = require("./partner_websites_shared");
var _partnerdata = require("./partnerdata");
var _pat_csv = require("./pat_csv");
var _patient_address = require("./patient_address");
var _patient_alternate_contacts = require("./patient_alternate_contacts");
var _patient_alternate_email = require("./patient_alternate_email");
var _patient_alternate_mobile = require("./patient_alternate_mobile");
var _patient_chk = require("./patient_chk");
var _patient_contract = require("./patient_contract");
var _patient_device = require("./patient_device");
var _patient_f_requests = require("./patient_f_requests");
var _patient_financing = require("./patient_financing");
var _patient_financing_1 = require("./patient_financing_1");
var _patient_financing_gp = require("./patient_financing_gp");
var _patient_financing_gp_logs = require("./patient_financing_gp_logs");
var _patient_financing_history = require("./patient_financing_history");
var _patient_notes = require("./patient_notes");
var _patient_notifications = require("./patient_notifications");
var _patient_payment_source = require("./patient_payment_source");
var _patient_plans = require("./patient_plans");
var _patient_profile = require("./patient_profile");
var _patient_verification_notes = require("./patient_verification_notes");
var _paul_payouts = require("./paul_payouts");
var _paul_transfers = require("./paul_transfers");
var _payback_main = require("./payback_main");
var _payback_transfer_errors = require("./payback_transfer_errors");
var _payback_transfers = require("./payback_transfers");
var _payment_alerts = require("./payment_alerts");
var _payment_claim_details = require("./payment_claim_details");
var _payment_financing_error = require("./payment_financing_error");
var _payment_intent = require("./payment_intent");
var _payment_intent_3d = require("./payment_intent_3d");
var _payment_links = require("./payment_links");
var _payment_process_email_logs = require("./payment_process_email_logs");
var _payment_process_link = require("./payment_process_link");
var _payment_process_link_subscription = require("./payment_process_link_subscription");
var _payment_process_record = require("./payment_process_record");
var _payment_process_subscription_records = require("./payment_process_subscription_records");
var _payment_process_subscription_tags = require("./payment_process_subscription_tags");
var _payment_process_subscriptions = require("./payment_process_subscriptions");
var _payment_source = require("./payment_source");
var _payment_type = require("./payment_type");
var _payout_email_logs = require("./payout_email_logs");
var _pdp_plan_history = require("./pdp_plan_history");
var _persona_other_documents = require("./persona_other_documents");
var _persona_verification = require("./persona_verification");
var _pf_status = require("./pf_status");
var _plaid_account = require("./plaid_account");
var _plaid_error_logs = require("./plaid_error_logs");
var _plaid_link_token = require("./plaid_link_token");
var _plans = require("./plans");
var _plans_reason_list = require("./plans_reason_list");
var _plans_reason_user = require("./plans_reason_user");
var _platform_payouts = require("./platform_payouts");
var _platform_transfers = require("./platform_transfers");
var _pp_buss_docs = require("./pp_buss_docs");
var _pp_doc_types = require("./pp_doc_types");
var _pp_documents = require("./pp_documents");
var _pp_subscription_notes = require("./pp_subscription_notes");
var _practice_type = require("./practice_type");
var _preapproval_buttons = require("./preapproval_buttons");
var _preapproval_followup = require("./preapproval_followup");
var _preapproval_leads = require("./preapproval_leads");
var _preapproval_leads_notes = require("./preapproval_leads_notes");
var _preapproval_resend_link = require("./preapproval_resend_link");
var _products = require("./products");
var _profit_loss_stats_history = require("./profit_loss_stats_history");
var _promotional_offer_notes = require("./promotional_offer_notes");
var _promotional_offer_types = require("./promotional_offer_types");
var _promotional_offers = require("./promotional_offers");
var _proposal_reason_list = require("./proposal_reason_list");
var _proposal_reason_users = require("./proposal_reason_users");
var _proposal_reminder = require("./proposal_reminder");
var _prospects = require("./prospects");
var _push_notification_content = require("./push_notification_content");
var _push_notification_sent = require("./push_notification_sent");
var _push_notification_templates = require("./push_notification_templates");
var _queries_without_callback = require("./queries_without_callback");
var _questions = require("./questions");
var _rating = require("./rating");
var _rating_links = require("./rating_links");
var _recuvery_email_status = require("./recuvery_email_status");
var _reminder_link_opened_history = require("./reminder_link_opened_history");
var _reminder_settings = require("./reminder_settings");
var _reminder_templates = require("./reminder_templates");
var _request_logs = require("./request_logs");
var _request_logs_v2 = require("./request_logs_v2");
var _request_marketing = require("./request_marketing");
var _reseller_referrals = require("./reseller_referrals");
var _resellerdata = require("./resellerdata");
var _resend_contract_changes_requests = require("./resend_contract_changes_requests");
var _review_platforms = require("./review_platforms");
var _ring_access_token = require("./ring_access_token");
var _roles = require("./roles");
var _saved_contracts = require("./saved_contracts");
var _settlement_contract_reminder = require("./settlement_contract_reminder");
var _settlement_contracts = require("./settlement_contracts");
var _settlement_doctor_payments = require("./settlement_doctor_payments");
var _settlement_payments_arrangement = require("./settlement_payments_arrangement");
var _settlement_reminder = require("./settlement_reminder");
var _short_link_service = require("./short_link_service");
var _sms_content = require("./sms_content");
var _sms_history = require("./sms_history");
var _sms_sent_status = require("./sms_sent_status");
var _social_healthcare_payments = require("./social_healthcare_payments");
var _socket = require("./socket");
var _special_notes = require("./special_notes");
var _speciality_type = require("./speciality_type");
var _split_app_request = require("./split_app_request");
var _split_bulk_uploads = require("./split_bulk_uploads");
var _split_email_logs = require("./split_email_logs");
var _split_errors = require("./split_errors");
var _split_logs = require("./split_logs");
var _split_upload_errors = require("./split_upload_errors");
var _ssn_verification = require("./ssn_verification");
var _state_timezone = require("./state_timezone");
var _states = require("./states");
var _statuses = require("./statuses");
var _stripe_charges = require("./stripe_charges");
var _stripe_doc_error = require("./stripe_doc_error");
var _stripe_errors = require("./stripe_errors");
var _stripe_financial_account = require("./stripe_financial_account");
var _stripe_identity_verification = require("./stripe_identity_verification");
var _stripe_temp_data = require("./stripe_temp_data");
var _stripe_transfers = require("./stripe_transfers");
var _sub_industries = require("./sub_industries");
var _subadmin_device = require("./subadmin_device");
var _subadmin_profile = require("./subadmin_profile");
var _subscription_action_type = require("./subscription_action_type");
var _subscription_card_links = require("./subscription_card_links");
var _subscription_contract_notes = require("./subscription_contract_notes");
var _subscription_contracts = require("./subscription_contracts");
var _subscription_feature = require("./subscription_feature");
var _subscription_news_letter = require("./subscription_news_letter");
var _subscription_notes = require("./subscription_notes");
var _subscription_payment_intents = require("./subscription_payment_intents");
var _subscription_payments = require("./subscription_payments");
var _subscription_plan = require("./subscription_plan");
var _subscription_reminder = require("./subscription_reminder");
var _subscription_transaction = require("./subscription_transaction");
var _subscriptions = require("./subscriptions");
var _subscriptions_requests = require("./subscriptions_requests");
var _support_data = require("./support_data");
var _system_constant = require("./system_constant");
var _system_settings = require("./system_settings");
var _table_audit_logs = require("./table_audit_logs");
var _temp_claims = require("./temp_claims");
var _test = require("./test");
var _test_ack_email = require("./test_ack_email");
var _testify_otp = require("./testify_otp");
var _time_slot_types = require("./time_slot_types");
var _timezone = require("./timezone");
var _trainers = require("./trainers");
var _training_answers = require("./training_answers");
var _training_link_tokens = require("./training_link_tokens");
var _training_questions = require("./training_questions");
var _training_screens = require("./training_screens");
var _training_screens_completed = require("./training_screens_completed");
var _training_statuses = require("./training_statuses");
var _training_types = require("./training_types");
var _transaction_fee_details = require("./transaction_fee_details");
var _transaction_fee_errors = require("./transaction_fee_errors");
var _transaction_fee_types = require("./transaction_fee_types");
var _transfer_reversals = require("./transfer_reversals");
var _treatment_categories = require("./treatment_categories");
var _treatment_codes = require("./treatment_codes");
var _treatment_document = require("./treatment_document");
var _tutorial_videos = require("./tutorial_videos");
var _tutorial_videos_history = require("./tutorial_videos_history");
var _twilio_incoming_alerts = require("./twilio_incoming_alerts");
var _unknown_transfers = require("./unknown_transfers");
var _unmatched_payouts = require("./unmatched_payouts");
var _unpaid_urgent_notes = require("./unpaid_urgent_notes");
var _unsubscribed_templates = require("./unsubscribed_templates");
var _user_events_time_slots = require("./user_events_time_slots");
var _user_otp = require("./user_otp");
var _user_roles = require("./user_roles");
var _user_sockets = require("./user_sockets");
var _user_weekly_preferences = require("./user_weekly_preferences");
var _user_weekly_preferences_time_slots = require("./user_weekly_preferences_time_slots");
var _users_review = require("./users_review");
var _validity_document_tickets = require("./validity_document_tickets");
var _waiver_deductions = require("./waiver_deductions");
var _web_app_links = require("./web_app_links");
var _webhook_failed_emails = require("./webhook_failed_emails");
var _webhook_logs = require("./webhook_logs");
var _website_hosting = require("./website_hosting");
var _website_theme = require("./website_theme");
var _welcome_kit = require("./welcome_kit");
var _welcome_kit_notes = require("./welcome_kit_notes");
var _wordpress_table = require("./wordpress_table");
var _wp_contact_queries = require("./wp_contact_queries");
var _wp_contact_queries_history = require("./wp_contact_queries_history");

function initModels(sequelize) {
  var access_menu_map = _access_menu_map(sequelize, DataTypes);
  var access_roles = _access_roles(sequelize, DataTypes);
  var ach_cron_payment_history = _ach_cron_payment_history(sequelize, DataTypes);
  var ach_payments = _ach_payments(sequelize, DataTypes);
  var ad_campaign = _ad_campaign(sequelize, DataTypes);
  var admin_access_control = _admin_access_control(sequelize, DataTypes);
  var admin_device = _admin_device(sequelize, DataTypes);
  var admin_notes = _admin_notes(sequelize, DataTypes);
  var admin_notifications = _admin_notifications(sequelize, DataTypes);
  var admin_otp = _admin_otp(sequelize, DataTypes);
  var admin_pf_action_type = _admin_pf_action_type(sequelize, DataTypes);
  var admin_pf_notes = _admin_pf_notes(sequelize, DataTypes);
  var admin_profile = _admin_profile(sequelize, DataTypes);
  var admin_profile_dummy = _admin_profile_dummy(sequelize, DataTypes);
  var admin_request_notes = _admin_request_notes(sequelize, DataTypes);
  var admin_requests = _admin_requests(sequelize, DataTypes);
  var admin_schedule = _admin_schedule(sequelize, DataTypes);
  var admin_settings = _admin_settings(sequelize, DataTypes);
  var admin_training_links = _admin_training_links(sequelize, DataTypes);
  var agent_departments = _agent_departments(sequelize, DataTypes);
  var agent_device = _agent_device(sequelize, DataTypes);
  var agent_notes = _agent_notes(sequelize, DataTypes);
  var agent_profile = _agent_profile(sequelize, DataTypes);
  var all_patient_financing = _all_patient_financing(sequelize, DataTypes);
  var all_patient_plans = _all_patient_plans(sequelize, DataTypes);
  var amreen_new_table = _amreen_new_table(sequelize, DataTypes);
  var answers = _answers(sequelize, DataTypes);
  var apf_token_whitelabel = _apf_token_whitelabel(sequelize, DataTypes);
  var api_response_time = _api_response_time(sequelize, DataTypes);
  var app_access_menu_map = _app_access_menu_map(sequelize, DataTypes);
  var app_menu_items = _app_menu_items(sequelize, DataTypes);
  var app_version = _app_version(sequelize, DataTypes);
  var app_version_notes = _app_version_notes(sequelize, DataTypes);
  var apps_devices = _apps_devices(sequelize, DataTypes);
  var ar_bsa_form = _ar_bsa_form(sequelize, DataTypes);
  var ar_plans = _ar_plans(sequelize, DataTypes);
  var ar_plans_bulk_uploads = _ar_plans_bulk_uploads(sequelize, DataTypes);
  var ar_plans_email_logs = _ar_plans_email_logs(sequelize, DataTypes);
  var ar_plans_errors = _ar_plans_errors(sequelize, DataTypes);
  var arrangements = _arrangements(sequelize, DataTypes);
  var arrangements_history = _arrangements_history(sequelize, DataTypes);
  var arv2_notes = _arv2_notes(sequelize, DataTypes);
  var authorization_table = _authorization_table(sequelize, DataTypes);
  var auto_ssn_update = _auto_ssn_update(sequelize, DataTypes);
  var aws_translation_json = _aws_translation_json(sequelize, DataTypes);
  var baa_document = _baa_document(sequelize, DataTypes);
  var baa_document_backup = _baa_document_backup(sequelize, DataTypes);
  var backup1_doctor_referrals = _backup1_doctor_referrals(sequelize, DataTypes);
  var balance_logs = _balance_logs(sequelize, DataTypes);
  var balance_transactions = _balance_transactions(sequelize, DataTypes);
  var bank_reminder = _bank_reminder(sequelize, DataTypes);
  var banks = _banks(sequelize, DataTypes);
  var bc_status = _bc_status(sequelize, DataTypes);
  var bot_fallbacks = _bot_fallbacks(sequelize, DataTypes);
  var bot_intents = _bot_intents(sequelize, DataTypes);
  var bot_logs = _bot_logs(sequelize, DataTypes);
  var bot_pages = _bot_pages(sequelize, DataTypes);
  var bot_synonyms = _bot_synonyms(sequelize, DataTypes);
  var bounced_emails = _bounced_emails(sequelize, DataTypes);
  var brochures = _brochures(sequelize, DataTypes);
  var bulk_upload_records = _bulk_upload_records(sequelize, DataTypes);
  var business_challenge_payments = _business_challenge_payments(sequelize, DataTypes);
  var business_financing_logs = _business_financing_logs(sequelize, DataTypes);
  var business_invitations = _business_invitations(sequelize, DataTypes);
  var business_notifications = _business_notifications(sequelize, DataTypes);
  var business_payment_matrix = _business_payment_matrix(sequelize, DataTypes);
  var business_preapproval_link = _business_preapproval_link(sequelize, DataTypes);
  var business_refer_list = _business_refer_list(sequelize, DataTypes);
  var business_referral_reminders = _business_referral_reminders(sequelize, DataTypes);
  var business_referral_transactions = _business_referral_transactions(sequelize, DataTypes);
  var business_referrals = _business_referrals(sequelize, DataTypes);
  var buss_doc_types = _buss_doc_types(sequelize, DataTypes);
  var buss_docs = _buss_docs(sequelize, DataTypes);
  var callback_reasons = _callback_reasons(sequelize, DataTypes);
  var canada_zipcodes = _canada_zipcodes(sequelize, DataTypes);
  var canada_zipcodes2 = _canada_zipcodes2(sequelize, DataTypes);
  var captcha_codes = _captcha_codes(sequelize, DataTypes);
  var card_links = _card_links(sequelize, DataTypes);
  var card_payment_history = _card_payment_history(sequelize, DataTypes);
  var cash_adjustment_zero_percent = _cash_adjustment_zero_percent(sequelize, DataTypes);
  var charge_generic_decline_error = _charge_generic_decline_error(sequelize, DataTypes);
  var charge_refunds = _charge_refunds(sequelize, DataTypes);
  var chatbot_fallbacks = _chatbot_fallbacks(sequelize, DataTypes);
  var chatbot_feedback = _chatbot_feedback(sequelize, DataTypes);
  var chatbot_logs = _chatbot_logs(sequelize, DataTypes);
  var check_email_sent = _check_email_sent(sequelize, DataTypes);
  var cheque = _cheque(sequelize, DataTypes);
  var cities_extended = _cities_extended(sequelize, DataTypes);
  var cities_extended2 = _cities_extended2(sequelize, DataTypes);
  var claim_denied_reasons = _claim_denied_reasons(sequelize, DataTypes);
  var claim_docs = _claim_docs(sequelize, DataTypes);
  var claim_drafts = _claim_drafts(sequelize, DataTypes);
  var claim_forms = _claim_forms(sequelize, DataTypes);
  var claim_notes = _claim_notes(sequelize, DataTypes);
  var claim_settings = _claim_settings(sequelize, DataTypes);
  var claim_status = _claim_status(sequelize, DataTypes);
  var claim_unpaid_pending_details = _claim_unpaid_pending_details(sequelize, DataTypes);
  var clarity_records = _clarity_records(sequelize, DataTypes);
  var cms_logs = _cms_logs(sequelize, DataTypes);
  var cms_templates = _cms_templates(sequelize, DataTypes);
  var cms_templates_types = _cms_templates_types(sequelize, DataTypes);
  var collections_error = _collections_error(sequelize, DataTypes);
  var collections_notes = _collections_notes(sequelize, DataTypes);
  var community_forum = _community_forum(sequelize, DataTypes);
  var completed_contract_unpaids = _completed_contract_unpaids(sequelize, DataTypes);
  var connect_onboarding = _connect_onboarding(sequelize, DataTypes);
  var contact_type = _contact_type(sequelize, DataTypes);
  var contact_types = _contact_types(sequelize, DataTypes);
  var contract_changes_request_actions = _contract_changes_request_actions(sequelize, DataTypes);
  var contract_changes_requests = _contract_changes_requests(sequelize, DataTypes);
  var contract_claim_stats = _contract_claim_stats(sequelize, DataTypes);
  var contract_claim_stats_history = _contract_claim_stats_history(sequelize, DataTypes);
  var contract_draft = _contract_draft(sequelize, DataTypes);
  var contract_reminder = _contract_reminder(sequelize, DataTypes);
  var contract_reminder_actions = _contract_reminder_actions(sequelize, DataTypes);
  var contract_service_record = _contract_service_record(sequelize, DataTypes);
  var countries = _countries(sequelize, DataTypes);
  var country_transaction_fee = _country_transaction_fee(sequelize, DataTypes);
  var critical_errors = _critical_errors(sequelize, DataTypes);
  var crm_prospects = _crm_prospects(sequelize, DataTypes);
  var crons_payments_emails = _crons_payments_emails(sequelize, DataTypes);
  var csr_docs = _csr_docs(sequelize, DataTypes);
  var csr_doctor_action_types = _csr_doctor_action_types(sequelize, DataTypes);
  var csr_enterprise_action_types = _csr_enterprise_action_types(sequelize, DataTypes);
  var csr_partner_action_types = _csr_partner_action_types(sequelize, DataTypes);
  var csr_patient_action_types = _csr_patient_action_types(sequelize, DataTypes);
  var csr_request_types = _csr_request_types(sequelize, DataTypes);
  var csr_requests = _csr_requests(sequelize, DataTypes);
  var csr_requests_notes = _csr_requests_notes(sequelize, DataTypes);
  var custom_model_data = _custom_model_data(sequelize, DataTypes);
  var customer_disputes = _customer_disputes(sequelize, DataTypes);
  var customer_doc = _customer_doc(sequelize, DataTypes);
  var customer_notifications = _customer_notifications(sequelize, DataTypes);
  var customer_package_downloaders = _customer_package_downloaders(sequelize, DataTypes);
  var customer_unsubscribe = _customer_unsubscribe(sequelize, DataTypes);
  var date_change_request = _date_change_request(sequelize, DataTypes);
  var debt_requests = _debt_requests(sequelize, DataTypes);
  var deeplink_data = _deeplink_data(sequelize, DataTypes);
  var deeplink_types = _deeplink_types(sequelize, DataTypes);
  var demand_letters = _demand_letters(sequelize, DataTypes);
  var demand_letters_stats = _demand_letters_stats(sequelize, DataTypes);
  var denefit_panels = _denefit_panels(sequelize, DataTypes);
  var denefits_links = _denefits_links(sequelize, DataTypes);
  var denefits_logos = _denefits_logos(sequelize, DataTypes);
  var denefits_payments = _denefits_payments(sequelize, DataTypes);
  var denefits_reviews = _denefits_reviews(sequelize, DataTypes);
  var denefits_testimonial_reviews = _denefits_testimonial_reviews(sequelize, DataTypes);
  var denefits_training = _denefits_training(sequelize, DataTypes);
  var denefits_training_details = _denefits_training_details(sequelize, DataTypes);
  var denefits_visitor_history = _denefits_visitor_history(sequelize, DataTypes);
  var denefits_visitors = _denefits_visitors(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var designations = _designations(sequelize, DataTypes);
  var dispute_document_type = _dispute_document_type(sequelize, DataTypes);
  var dispute_documents = _dispute_documents(sequelize, DataTypes);
  var dispute_reasons = _dispute_reasons(sequelize, DataTypes);
  var disputes = _disputes(sequelize, DataTypes);
  var doc_csv = _doc_csv(sequelize, DataTypes);
  var doctor_ada = _doctor_ada(sequelize, DataTypes);
  var doctor_agent_extended = _doctor_agent_extended(sequelize, DataTypes);
  var doctor_agents = _doctor_agents(sequelize, DataTypes);
  var doctor_alternate_contact = _doctor_alternate_contact(sequelize, DataTypes);
  var doctor_alternate_emails = _doctor_alternate_emails(sequelize, DataTypes);
  var doctor_alternate_mobile = _doctor_alternate_mobile(sequelize, DataTypes);
  var doctor_bank = _doctor_bank(sequelize, DataTypes);
  var doctor_captcha = _doctor_captcha(sequelize, DataTypes);
  var doctor_device = _doctor_device(sequelize, DataTypes);
  var doctor_device_old = _doctor_device_old(sequelize, DataTypes);
  var doctor_dispute_documents = _doctor_dispute_documents(sequelize, DataTypes);
  var doctor_extended = _doctor_extended(sequelize, DataTypes);
  var doctor_feature = _doctor_feature(sequelize, DataTypes);
  var doctor_financer = _doctor_financer(sequelize, DataTypes);
  var doctor_financial_settings = _doctor_financial_settings(sequelize, DataTypes);
  var doctor_instant_card = _doctor_instant_card(sequelize, DataTypes);
  var doctor_location_manager = _doctor_location_manager(sequelize, DataTypes);
  var doctor_missing_payments = _doctor_missing_payments(sequelize, DataTypes);
  var doctor_notes = _doctor_notes(sequelize, DataTypes);
  var doctor_partner_event_training_notes_status = _doctor_partner_event_training_notes_status(sequelize, DataTypes);
  var doctor_partner_training_time_slots = _doctor_partner_training_time_slots(sequelize, DataTypes);
  var doctor_pay_subscription = _doctor_pay_subscription(sequelize, DataTypes);
  var doctor_payments = _doctor_payments(sequelize, DataTypes);
  var doctor_payments_source = _doctor_payments_source(sequelize, DataTypes);
  var doctor_payouts = _doctor_payouts(sequelize, DataTypes);
  var doctor_phase_admin_logs = _doctor_phase_admin_logs(sequelize, DataTypes);
  var doctor_phase_logs = _doctor_phase_logs(sequelize, DataTypes);
  var doctor_phase_settings = _doctor_phase_settings(sequelize, DataTypes);
  var doctor_popup_status = _doctor_popup_status(sequelize, DataTypes);
  var doctor_profile = _doctor_profile(sequelize, DataTypes);
  var doctor_profile_registration = _doctor_profile_registration(sequelize, DataTypes);
  var doctor_profile_unregistered = _doctor_profile_unregistered(sequelize, DataTypes);
  var doctor_referral_wallet = _doctor_referral_wallet(sequelize, DataTypes);
  var doctor_referrals = _doctor_referrals(sequelize, DataTypes);
  var doctor_referrals22 = _doctor_referrals22(sequelize, DataTypes);
  var doctor_referrals_2 = _doctor_referrals_2(sequelize, DataTypes);
  var doctor_register_otp = _doctor_register_otp(sequelize, DataTypes);
  var doctor_registration_document = _doctor_registration_document(sequelize, DataTypes);
  var doctor_report_request = _doctor_report_request(sequelize, DataTypes);
  var doctor_settings = _doctor_settings(sequelize, DataTypes);
  var doctor_signup_email_read_count = _doctor_signup_email_read_count(sequelize, DataTypes);
  var doctor_speciality = _doctor_speciality(sequelize, DataTypes);
  var doctor_subscription = _doctor_subscription(sequelize, DataTypes);
  var doctor_subscription_1 = _doctor_subscription_1(sequelize, DataTypes);
  var doctor_subscription_feature = _doctor_subscription_feature(sequelize, DataTypes);
  var doctor_subscription_history = _doctor_subscription_history(sequelize, DataTypes);
  var doctor_training = _doctor_training(sequelize, DataTypes);
  var doctor_training_2 = _doctor_training_2(sequelize, DataTypes);
  var doctor_training_notes = _doctor_training_notes(sequelize, DataTypes);
  var doctor_transaction_fee = _doctor_transaction_fee(sequelize, DataTypes);
  var doctor_transfers = _doctor_transfers(sequelize, DataTypes);
  var doctor_verification = _doctor_verification(sequelize, DataTypes);
  var doctor_verification_docs = _doctor_verification_docs(sequelize, DataTypes);
  var doctor_verification_notes = _doctor_verification_notes(sequelize, DataTypes);
  var document_types = _document_types(sequelize, DataTypes);
  var draft_contract = _draft_contract(sequelize, DataTypes);
  var draft_website = _draft_website(sequelize, DataTypes);
  var edit_contract_adjustment = _edit_contract_adjustment(sequelize, DataTypes);
  var edit_contract_records = _edit_contract_records(sequelize, DataTypes);
  var email_details = _email_details(sequelize, DataTypes);
  var email_error = _email_error(sequelize, DataTypes);
  var email_error_webhook = _email_error_webhook(sequelize, DataTypes);
  var email_history = _email_history(sequelize, DataTypes);
  var email_product_configuration = _email_product_configuration(sequelize, DataTypes);
  var email_records = _email_records(sequelize, DataTypes);
  var email_request_details = _email_request_details(sequelize, DataTypes);
  var email_response_details = _email_response_details(sequelize, DataTypes);
  var email_templates = _email_templates(sequelize, DataTypes);
  var email_templates_2 = _email_templates_2(sequelize, DataTypes);
  var email_templates_dummy = _email_templates_dummy(sequelize, DataTypes);
  var email_templates_language = _email_templates_language(sequelize, DataTypes);
  var email_token = _email_token(sequelize, DataTypes);
  var email_triggers_templates = _email_triggers_templates(sequelize, DataTypes);
  var emails_sent = _emails_sent(sequelize, DataTypes);
  var enterprise_access_menu_map = _enterprise_access_menu_map(sequelize, DataTypes);
  var enterprise_access_roles = _enterprise_access_roles(sequelize, DataTypes);
  var enterprise_admin_profile = _enterprise_admin_profile(sequelize, DataTypes);
  var enterprise_device = _enterprise_device(sequelize, DataTypes);
  var enterprise_location_types = _enterprise_location_types(sequelize, DataTypes);
  var enterprise_menu_items = _enterprise_menu_items(sequelize, DataTypes);
  var enterprise_profile = _enterprise_profile(sequelize, DataTypes);
  var entities = _entities(sequelize, DataTypes);
  var error_logs = _error_logs(sequelize, DataTypes);
  var event_admin = _event_admin(sequelize, DataTypes);
  var event_details = _event_details(sequelize, DataTypes);
  var event_notes = _event_notes(sequelize, DataTypes);
  var event_socket = _event_socket(sequelize, DataTypes);
  var event_triggers = _event_triggers(sequelize, DataTypes);
  var events = _events(sequelize, DataTypes);
  var faq = _faq(sequelize, DataTypes);
  var faq_categories = _faq_categories(sequelize, DataTypes);
  var faq_tags = _faq_tags(sequelize, DataTypes);
  var faq_tags_link = _faq_tags_link(sequelize, DataTypes);
  var faq_types = _faq_types(sequelize, DataTypes);
  var faq_v2 = _faq_v2(sequelize, DataTypes);
  var faq_v2_bkp = _faq_v2_bkp(sequelize, DataTypes);
  var feature_list = _feature_list(sequelize, DataTypes);
  var file_upload_links = _file_upload_links(sequelize, DataTypes);
  var finance_errors = _finance_errors(sequelize, DataTypes);
  var financer_departments = _financer_departments(sequelize, DataTypes);
  var financer_device = _financer_device(sequelize, DataTypes);
  var financer_profile = _financer_profile(sequelize, DataTypes);
  var financing_drafts = _financing_drafts(sequelize, DataTypes);
  var financing_type = _financing_type(sequelize, DataTypes);
  var firebase_events = _firebase_events(sequelize, DataTypes);
  var global_email_logs = _global_email_logs(sequelize, DataTypes);
  var global_errors = _global_errors(sequelize, DataTypes);
  var global_logs = _global_logs(sequelize, DataTypes);
  var guarantee_type = _guarantee_type(sequelize, DataTypes);
  var guaranteed_logs = _guaranteed_logs(sequelize, DataTypes);
  var guaranteed_recovery = _guaranteed_recovery(sequelize, DataTypes);
  var imp_updates_stripe = _imp_updates_stripe(sequelize, DataTypes);
  var industries = _industries(sequelize, DataTypes);
  var inquiry_email_sent_records = _inquiry_email_sent_records(sequelize, DataTypes);
  var instant_payout_support_banks = _instant_payout_support_banks(sequelize, DataTypes);
  var institute_bank = _institute_bank(sequelize, DataTypes);
  var institute_device = _institute_device(sequelize, DataTypes);
  var institute_notifications = _institute_notifications(sequelize, DataTypes);
  var institute_person = _institute_person(sequelize, DataTypes);
  var institute_profile = _institute_profile(sequelize, DataTypes);
  var institute_referrals = _institute_referrals(sequelize, DataTypes);
  var internal_email = _internal_email(sequelize, DataTypes);
  var invalid_email_cron = _invalid_email_cron(sequelize, DataTypes);
  var invalid_email_logs = _invalid_email_logs(sequelize, DataTypes);
  var late_fee_type = _late_fee_type(sequelize, DataTypes);
  var late_fees = _late_fees(sequelize, DataTypes);
  var lead_action_logs = _lead_action_logs(sequelize, DataTypes);
  var lead_csv_error = _lead_csv_error(sequelize, DataTypes);
  var lead_history = _lead_history(sequelize, DataTypes);
  var lead_sources = _lead_sources(sequelize, DataTypes);
  var lead_status = _lead_status(sequelize, DataTypes);
  var leads = _leads(sequelize, DataTypes);
  var location_manager_device = _location_manager_device(sequelize, DataTypes);
  var location_manager_profile = _location_manager_profile(sequelize, DataTypes);
  var logs_for_me = _logs_for_me(sequelize, DataTypes);
  var marketing_notes = _marketing_notes(sequelize, DataTypes);
  var mass_email_report = _mass_email_report(sequelize, DataTypes);
  var master_events = _master_events(sequelize, DataTypes);
  var menu_items = _menu_items(sequelize, DataTypes);
  var menu_notes = _menu_notes(sequelize, DataTypes);
  var micro_deposit_reminder = _micro_deposit_reminder(sequelize, DataTypes);
  var missing_notes = _missing_notes(sequelize, DataTypes);
  var missing_partial_recovery = _missing_partial_recovery(sequelize, DataTypes);
  var mobile_template = _mobile_template(sequelize, DataTypes);
  var more_documents = _more_documents(sequelize, DataTypes);
  var multi_language = _multi_language(sequelize, DataTypes);
  var new_features = _new_features(sequelize, DataTypes);
  var non_guaranteed_reason = _non_guaranteed_reason(sequelize, DataTypes);
  var notification_types = _notification_types(sequelize, DataTypes);
  var old_email_templates = _old_email_templates(sequelize, DataTypes);
  var open_api_webhook_subscribed = _open_api_webhook_subscribed(sequelize, DataTypes);
  var openai_conversations = _openai_conversations(sequelize, DataTypes);
  var openai_critical_errors = _openai_critical_errors(sequelize, DataTypes);
  var openai_fallbacks = _openai_fallbacks(sequelize, DataTypes);
  var openai_finetune_models = _openai_finetune_models(sequelize, DataTypes);
  var openai_models = _openai_models(sequelize, DataTypes);
  var openai_prompt_types = _openai_prompt_types(sequelize, DataTypes);
  var openai_prompts = _openai_prompts(sequelize, DataTypes);
  var openai_question_answer = _openai_question_answer(sequelize, DataTypes);
  var openai_requests = _openai_requests(sequelize, DataTypes);
  var openai_training_data = _openai_training_data(sequelize, DataTypes);
  var orp_payment_values = _orp_payment_values(sequelize, DataTypes);
  var otp_type = _otp_type(sequelize, DataTypes);
  var panel_video_links = _panel_video_links(sequelize, DataTypes);
  var partial_payments = _partial_payments(sequelize, DataTypes);
  var partner_alternate_contacts = _partner_alternate_contacts(sequelize, DataTypes);
  var partner_alternate_email = _partner_alternate_email(sequelize, DataTypes);
  var partner_alternate_mobile = _partner_alternate_mobile(sequelize, DataTypes);
  var partner_answers = _partner_answers(sequelize, DataTypes);
  var partner_assets_files = _partner_assets_files(sequelize, DataTypes);
  var partner_assets_folders = _partner_assets_folders(sequelize, DataTypes);
  var partner_auth_token_mapping = _partner_auth_token_mapping(sequelize, DataTypes);
  var partner_bank = _partner_bank(sequelize, DataTypes);
  var partner_business_card = _partner_business_card(sequelize, DataTypes);
  var partner_contract_share = _partner_contract_share(sequelize, DataTypes);
  var partner_contract_share_doctor_settings = _partner_contract_share_doctor_settings(sequelize, DataTypes);
  var partner_course_badges = _partner_course_badges(sequelize, DataTypes);
  var partner_device = _partner_device(sequelize, DataTypes);
  var partner_doctor_referrals = _partner_doctor_referrals(sequelize, DataTypes);
  var partner_domains = _partner_domains(sequelize, DataTypes);
  var partner_domains_dummy = _partner_domains_dummy(sequelize, DataTypes);
  var partner_educational_email = _partner_educational_email(sequelize, DataTypes);
  var partner_events = _partner_events(sequelize, DataTypes);
  var partner_notes = _partner_notes(sequelize, DataTypes);
  var partner_notifications = _partner_notifications(sequelize, DataTypes);
  var partner_parents = _partner_parents(sequelize, DataTypes);
  var partner_payments = _partner_payments(sequelize, DataTypes);
  var partner_payouts = _partner_payouts(sequelize, DataTypes);
  var partner_popup_status = _partner_popup_status(sequelize, DataTypes);
  var partner_profile = _partner_profile(sequelize, DataTypes);
  var partner_quiz_answers = _partner_quiz_answers(sequelize, DataTypes);
  var partner_quiz_questions = _partner_quiz_questions(sequelize, DataTypes);
  var partner_read_courses = _partner_read_courses(sequelize, DataTypes);
  var partner_referrals = _partner_referrals(sequelize, DataTypes);
  var partner_settings = _partner_settings(sequelize, DataTypes);
  var partner_share = _partner_share(sequelize, DataTypes);
  var partner_stripe_verification = _partner_stripe_verification(sequelize, DataTypes);
  var partner_testimonials = _partner_testimonials(sequelize, DataTypes);
  var partner_transfers = _partner_transfers(sequelize, DataTypes);
  var partner_verification = _partner_verification(sequelize, DataTypes);
  var partner_verification_docs = _partner_verification_docs(sequelize, DataTypes);
  var partner_verification_links = _partner_verification_links(sequelize, DataTypes);
  var partner_verification_notes = _partner_verification_notes(sequelize, DataTypes);
  var partner_websites_shared = _partner_websites_shared(sequelize, DataTypes);
  var partnerdata = _partnerdata(sequelize, DataTypes);
  var pat_csv = _pat_csv(sequelize, DataTypes);
  var patient_address = _patient_address(sequelize, DataTypes);
  var patient_alternate_contacts = _patient_alternate_contacts(sequelize, DataTypes);
  var patient_alternate_email = _patient_alternate_email(sequelize, DataTypes);
  var patient_alternate_mobile = _patient_alternate_mobile(sequelize, DataTypes);
  var patient_chk = _patient_chk(sequelize, DataTypes);
  var patient_contract = _patient_contract(sequelize, DataTypes);
  var patient_device = _patient_device(sequelize, DataTypes);
  var patient_f_requests = _patient_f_requests(sequelize, DataTypes);
  var patient_financing = _patient_financing(sequelize, DataTypes);
  var patient_financing_1 = _patient_financing_1(sequelize, DataTypes);
  var patient_financing_gp = _patient_financing_gp(sequelize, DataTypes);
  var patient_financing_gp_logs = _patient_financing_gp_logs(sequelize, DataTypes);
  var patient_financing_history = _patient_financing_history(sequelize, DataTypes);
  var patient_notes = _patient_notes(sequelize, DataTypes);
  var patient_notifications = _patient_notifications(sequelize, DataTypes);
  var patient_payment_source = _patient_payment_source(sequelize, DataTypes);
  var patient_plans = _patient_plans(sequelize, DataTypes);
  var patient_profile = _patient_profile(sequelize, DataTypes);
  var patient_verification_notes = _patient_verification_notes(sequelize, DataTypes);
  var paul_payouts = _paul_payouts(sequelize, DataTypes);
  var paul_transfers = _paul_transfers(sequelize, DataTypes);
  var payback_main = _payback_main(sequelize, DataTypes);
  var payback_transfer_errors = _payback_transfer_errors(sequelize, DataTypes);
  var payback_transfers = _payback_transfers(sequelize, DataTypes);
  var payment_alerts = _payment_alerts(sequelize, DataTypes);
  var payment_claim_details = _payment_claim_details(sequelize, DataTypes);
  var payment_financing_error = _payment_financing_error(sequelize, DataTypes);
  var payment_intent = _payment_intent(sequelize, DataTypes);
  var payment_intent_3d = _payment_intent_3d(sequelize, DataTypes);
  var payment_links = _payment_links(sequelize, DataTypes);
  var payment_process_email_logs = _payment_process_email_logs(sequelize, DataTypes);
  var payment_process_link = _payment_process_link(sequelize, DataTypes);
  var payment_process_link_subscription = _payment_process_link_subscription(sequelize, DataTypes);
  var payment_process_record = _payment_process_record(sequelize, DataTypes);
  var payment_process_subscription_records = _payment_process_subscription_records(sequelize, DataTypes);
  var payment_process_subscription_tags = _payment_process_subscription_tags(sequelize, DataTypes);
  var payment_process_subscriptions = _payment_process_subscriptions(sequelize, DataTypes);
  var payment_source = _payment_source(sequelize, DataTypes);
  var payment_type = _payment_type(sequelize, DataTypes);
  var payout_email_logs = _payout_email_logs(sequelize, DataTypes);
  var pdp_plan_history = _pdp_plan_history(sequelize, DataTypes);
  var persona_other_documents = _persona_other_documents(sequelize, DataTypes);
  var persona_verification = _persona_verification(sequelize, DataTypes);
  var pf_status = _pf_status(sequelize, DataTypes);
  var plaid_account = _plaid_account(sequelize, DataTypes);
  var plaid_error_logs = _plaid_error_logs(sequelize, DataTypes);
  var plaid_link_token = _plaid_link_token(sequelize, DataTypes);
  var plans = _plans(sequelize, DataTypes);
  var plans_reason_list = _plans_reason_list(sequelize, DataTypes);
  var plans_reason_user = _plans_reason_user(sequelize, DataTypes);
  var platform_payouts = _platform_payouts(sequelize, DataTypes);
  var platform_transfers = _platform_transfers(sequelize, DataTypes);
  var pp_buss_docs = _pp_buss_docs(sequelize, DataTypes);
  var pp_doc_types = _pp_doc_types(sequelize, DataTypes);
  var pp_documents = _pp_documents(sequelize, DataTypes);
  var pp_subscription_notes = _pp_subscription_notes(sequelize, DataTypes);
  var practice_type = _practice_type(sequelize, DataTypes);
  var preapproval_buttons = _preapproval_buttons(sequelize, DataTypes);
  var preapproval_followup = _preapproval_followup(sequelize, DataTypes);
  var preapproval_leads = _preapproval_leads(sequelize, DataTypes);
  var preapproval_leads_notes = _preapproval_leads_notes(sequelize, DataTypes);
  var preapproval_resend_link = _preapproval_resend_link(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var profit_loss_stats_history = _profit_loss_stats_history(sequelize, DataTypes);
  var promotional_offer_notes = _promotional_offer_notes(sequelize, DataTypes);
  var promotional_offer_types = _promotional_offer_types(sequelize, DataTypes);
  var promotional_offers = _promotional_offers(sequelize, DataTypes);
  var proposal_reason_list = _proposal_reason_list(sequelize, DataTypes);
  var proposal_reason_users = _proposal_reason_users(sequelize, DataTypes);
  var proposal_reminder = _proposal_reminder(sequelize, DataTypes);
  var prospects = _prospects(sequelize, DataTypes);
  var push_notification_content = _push_notification_content(sequelize, DataTypes);
  var push_notification_sent = _push_notification_sent(sequelize, DataTypes);
  var push_notification_templates = _push_notification_templates(sequelize, DataTypes);
  var queries_without_callback = _queries_without_callback(sequelize, DataTypes);
  var questions = _questions(sequelize, DataTypes);
  var rating = _rating(sequelize, DataTypes);
  var rating_links = _rating_links(sequelize, DataTypes);
  var recuvery_email_status = _recuvery_email_status(sequelize, DataTypes);
  var reminder_link_opened_history = _reminder_link_opened_history(sequelize, DataTypes);
  var reminder_settings = _reminder_settings(sequelize, DataTypes);
  var reminder_templates = _reminder_templates(sequelize, DataTypes);
  var request_logs = _request_logs(sequelize, DataTypes);
  var request_logs_v2 = _request_logs_v2(sequelize, DataTypes);
  var request_marketing = _request_marketing(sequelize, DataTypes);
  var reseller_referrals = _reseller_referrals(sequelize, DataTypes);
  var resellerdata = _resellerdata(sequelize, DataTypes);
  var resend_contract_changes_requests = _resend_contract_changes_requests(sequelize, DataTypes);
  var review_platforms = _review_platforms(sequelize, DataTypes);
  var ring_access_token = _ring_access_token(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var saved_contracts = _saved_contracts(sequelize, DataTypes);
  var settlement_contract_reminder = _settlement_contract_reminder(sequelize, DataTypes);
  var settlement_contracts = _settlement_contracts(sequelize, DataTypes);
  var settlement_doctor_payments = _settlement_doctor_payments(sequelize, DataTypes);
  var settlement_payments_arrangement = _settlement_payments_arrangement(sequelize, DataTypes);
  var settlement_reminder = _settlement_reminder(sequelize, DataTypes);
  var short_link_service = _short_link_service(sequelize, DataTypes);
  var sms_content = _sms_content(sequelize, DataTypes);
  var sms_history = _sms_history(sequelize, DataTypes);
  var sms_sent_status = _sms_sent_status(sequelize, DataTypes);
  var social_healthcare_payments = _social_healthcare_payments(sequelize, DataTypes);
  var socket = _socket(sequelize, DataTypes);
  var special_notes = _special_notes(sequelize, DataTypes);
  var speciality_type = _speciality_type(sequelize, DataTypes);
  var split_app_request = _split_app_request(sequelize, DataTypes);
  var split_bulk_uploads = _split_bulk_uploads(sequelize, DataTypes);
  var split_email_logs = _split_email_logs(sequelize, DataTypes);
  var split_errors = _split_errors(sequelize, DataTypes);
  var split_logs = _split_logs(sequelize, DataTypes);
  var split_upload_errors = _split_upload_errors(sequelize, DataTypes);
  var ssn_verification = _ssn_verification(sequelize, DataTypes);
  var state_timezone = _state_timezone(sequelize, DataTypes);
  var states = _states(sequelize, DataTypes);
  var statuses = _statuses(sequelize, DataTypes);
  var stripe_charges = _stripe_charges(sequelize, DataTypes);
  var stripe_doc_error = _stripe_doc_error(sequelize, DataTypes);
  var stripe_errors = _stripe_errors(sequelize, DataTypes);
  var stripe_financial_account = _stripe_financial_account(sequelize, DataTypes);
  var stripe_identity_verification = _stripe_identity_verification(sequelize, DataTypes);
  var stripe_temp_data = _stripe_temp_data(sequelize, DataTypes);
  var stripe_transfers = _stripe_transfers(sequelize, DataTypes);
  var sub_industries = _sub_industries(sequelize, DataTypes);
  var subadmin_device = _subadmin_device(sequelize, DataTypes);
  var subadmin_profile = _subadmin_profile(sequelize, DataTypes);
  var subscription_action_type = _subscription_action_type(sequelize, DataTypes);
  var subscription_card_links = _subscription_card_links(sequelize, DataTypes);
  var subscription_contract_notes = _subscription_contract_notes(sequelize, DataTypes);
  var subscription_contracts = _subscription_contracts(sequelize, DataTypes);
  var subscription_feature = _subscription_feature(sequelize, DataTypes);
  var subscription_news_letter = _subscription_news_letter(sequelize, DataTypes);
  var subscription_notes = _subscription_notes(sequelize, DataTypes);
  var subscription_payment_intents = _subscription_payment_intents(sequelize, DataTypes);
  var subscription_payments = _subscription_payments(sequelize, DataTypes);
  var subscription_plan = _subscription_plan(sequelize, DataTypes);
  var subscription_reminder = _subscription_reminder(sequelize, DataTypes);
  var subscription_transaction = _subscription_transaction(sequelize, DataTypes);
  var subscriptions = _subscriptions(sequelize, DataTypes);
  var subscriptions_requests = _subscriptions_requests(sequelize, DataTypes);
  var support_data = _support_data(sequelize, DataTypes);
  var system_constant = _system_constant(sequelize, DataTypes);
  var system_settings = _system_settings(sequelize, DataTypes);
  var table_audit_logs = _table_audit_logs(sequelize, DataTypes);
  var temp_claims = _temp_claims(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);
  var test_ack_email = _test_ack_email(sequelize, DataTypes);
  var testify_otp = _testify_otp(sequelize, DataTypes);
  var time_slot_types = _time_slot_types(sequelize, DataTypes);
  var timezone = _timezone(sequelize, DataTypes);
  var trainers = _trainers(sequelize, DataTypes);
  var training_answers = _training_answers(sequelize, DataTypes);
  var training_link_tokens = _training_link_tokens(sequelize, DataTypes);
  var training_questions = _training_questions(sequelize, DataTypes);
  var training_screens = _training_screens(sequelize, DataTypes);
  var training_screens_completed = _training_screens_completed(sequelize, DataTypes);
  var training_statuses = _training_statuses(sequelize, DataTypes);
  var training_types = _training_types(sequelize, DataTypes);
  var transaction_fee_details = _transaction_fee_details(sequelize, DataTypes);
  var transaction_fee_errors = _transaction_fee_errors(sequelize, DataTypes);
  var transaction_fee_types = _transaction_fee_types(sequelize, DataTypes);
  var transfer_reversals = _transfer_reversals(sequelize, DataTypes);
  var treatment_categories = _treatment_categories(sequelize, DataTypes);
  var treatment_codes = _treatment_codes(sequelize, DataTypes);
  var treatment_document = _treatment_document(sequelize, DataTypes);
  var tutorial_videos = _tutorial_videos(sequelize, DataTypes);
  var tutorial_videos_history = _tutorial_videos_history(sequelize, DataTypes);
  var twilio_incoming_alerts = _twilio_incoming_alerts(sequelize, DataTypes);
  var unknown_transfers = _unknown_transfers(sequelize, DataTypes);
  var unmatched_payouts = _unmatched_payouts(sequelize, DataTypes);
  var unpaid_urgent_notes = _unpaid_urgent_notes(sequelize, DataTypes);
  var unsubscribed_templates = _unsubscribed_templates(sequelize, DataTypes);
  var user_events_time_slots = _user_events_time_slots(sequelize, DataTypes);
  var user_otp = _user_otp(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var user_sockets = _user_sockets(sequelize, DataTypes);
  var user_weekly_preferences = _user_weekly_preferences(sequelize, DataTypes);
  var user_weekly_preferences_time_slots = _user_weekly_preferences_time_slots(sequelize, DataTypes);
  var users_review = _users_review(sequelize, DataTypes);
  var validity_document_tickets = _validity_document_tickets(sequelize, DataTypes);
  var waiver_deductions = _waiver_deductions(sequelize, DataTypes);
  var web_app_links = _web_app_links(sequelize, DataTypes);
  var webhook_failed_emails = _webhook_failed_emails(sequelize, DataTypes);
  var webhook_logs = _webhook_logs(sequelize, DataTypes);
  var website_hosting = _website_hosting(sequelize, DataTypes);
  var website_theme = _website_theme(sequelize, DataTypes);
  var welcome_kit = _welcome_kit(sequelize, DataTypes);
  var welcome_kit_notes = _welcome_kit_notes(sequelize, DataTypes);
  var wordpress_table = _wordpress_table(sequelize, DataTypes);
  var wp_contact_queries = _wp_contact_queries(sequelize, DataTypes);
  var wp_contact_queries_history = _wp_contact_queries_history(sequelize, DataTypes);

  reminder_templates.belongsTo(email_templates, { as: "email_template", foreignKey: "email_template_id"});
  email_templates.hasMany(reminder_templates, { as: "reminder_templates", foreignKey: "email_template_id"});
  reminder_templates.belongsTo(mobile_template, { as: "mobile_template", foreignKey: "mobile_template_id"});
  mobile_template.hasMany(reminder_templates, { as: "reminder_templates", foreignKey: "mobile_template_id"});
  openai_question_answer.belongsTo(openai_training_data, { as: "training_datum", foreignKey: "training_data_id"});
  openai_training_data.hasMany(openai_question_answer, { as: "openai_question_answers", foreignKey: "training_data_id"});

  return {
    access_menu_map,
    access_roles,
    ach_cron_payment_history,
    ach_payments,
    ad_campaign,
    admin_access_control,
    admin_device,
    admin_notes,
    admin_notifications,
    admin_otp,
    admin_pf_action_type,
    admin_pf_notes,
    admin_profile,
    admin_profile_dummy,
    admin_request_notes,
    admin_requests,
    admin_schedule,
    admin_settings,
    admin_training_links,
    agent_departments,
    agent_device,
    agent_notes,
    agent_profile,
    all_patient_financing,
    all_patient_plans,
    amreen_new_table,
    answers,
    apf_token_whitelabel,
    api_response_time,
    app_access_menu_map,
    app_menu_items,
    app_version,
    app_version_notes,
    apps_devices,
    ar_bsa_form,
    ar_plans,
    ar_plans_bulk_uploads,
    ar_plans_email_logs,
    ar_plans_errors,
    arrangements,
    arrangements_history,
    arv2_notes,
    authorization_table,
    auto_ssn_update,
    aws_translation_json,
    baa_document,
    baa_document_backup,
    backup1_doctor_referrals,
    balance_logs,
    balance_transactions,
    bank_reminder,
    banks,
    bc_status,
    bot_fallbacks,
    bot_intents,
    bot_logs,
    bot_pages,
    bot_synonyms,
    bounced_emails,
    brochures,
    bulk_upload_records,
    business_challenge_payments,
    business_financing_logs,
    business_invitations,
    business_notifications,
    business_payment_matrix,
    business_preapproval_link,
    business_refer_list,
    business_referral_reminders,
    business_referral_transactions,
    business_referrals,
    buss_doc_types,
    buss_docs,
    callback_reasons,
    canada_zipcodes,
    canada_zipcodes2,
    captcha_codes,
    card_links,
    card_payment_history,
    cash_adjustment_zero_percent,
    charge_generic_decline_error,
    charge_refunds,
    chatbot_fallbacks,
    chatbot_feedback,
    chatbot_logs,
    check_email_sent,
    cheque,
    cities_extended,
    cities_extended2,
    claim_denied_reasons,
    claim_docs,
    claim_drafts,
    claim_forms,
    claim_notes,
    claim_settings,
    claim_status,
    claim_unpaid_pending_details,
    clarity_records,
    cms_logs,
    cms_templates,
    cms_templates_types,
    collections_error,
    collections_notes,
    community_forum,
    completed_contract_unpaids,
    connect_onboarding,
    contact_type,
    contact_types,
    contract_changes_request_actions,
    contract_changes_requests,
    contract_claim_stats,
    contract_claim_stats_history,
    contract_draft,
    contract_reminder,
    contract_reminder_actions,
    contract_service_record,
    countries,
    country_transaction_fee,
    critical_errors,
    crm_prospects,
    crons_payments_emails,
    csr_docs,
    csr_doctor_action_types,
    csr_enterprise_action_types,
    csr_partner_action_types,
    csr_patient_action_types,
    csr_request_types,
    csr_requests,
    csr_requests_notes,
    custom_model_data,
    customer_disputes,
    customer_doc,
    customer_notifications,
    customer_package_downloaders,
    customer_unsubscribe,
    date_change_request,
    debt_requests,
    deeplink_data,
    deeplink_types,
    demand_letters,
    demand_letters_stats,
    denefit_panels,
    denefits_links,
    denefits_logos,
    denefits_payments,
    denefits_reviews,
    denefits_testimonial_reviews,
    denefits_training,
    denefits_training_details,
    denefits_visitor_history,
    denefits_visitors,
    departments,
    designations,
    dispute_document_type,
    dispute_documents,
    dispute_reasons,
    disputes,
    doc_csv,
    doctor_ada,
    doctor_agent_extended,
    doctor_agents,
    doctor_alternate_contact,
    doctor_alternate_emails,
    doctor_alternate_mobile,
    doctor_bank,
    doctor_captcha,
    doctor_device,
    doctor_device_old,
    doctor_dispute_documents,
    doctor_extended,
    doctor_feature,
    doctor_financer,
    doctor_financial_settings,
    doctor_instant_card,
    doctor_location_manager,
    doctor_missing_payments,
    doctor_notes,
    doctor_partner_event_training_notes_status,
    doctor_partner_training_time_slots,
    doctor_pay_subscription,
    doctor_payments,
    doctor_payments_source,
    doctor_payouts,
    doctor_phase_admin_logs,
    doctor_phase_logs,
    doctor_phase_settings,
    doctor_popup_status,
    doctor_profile,
    doctor_profile_registration,
    doctor_profile_unregistered,
    doctor_referral_wallet,
    doctor_referrals,
    doctor_referrals22,
    doctor_referrals_2,
    doctor_register_otp,
    doctor_registration_document,
    doctor_report_request,
    doctor_settings,
    doctor_signup_email_read_count,
    doctor_speciality,
    doctor_subscription,
    doctor_subscription_1,
    doctor_subscription_feature,
    doctor_subscription_history,
    doctor_training,
    doctor_training_2,
    doctor_training_notes,
    doctor_transaction_fee,
    doctor_transfers,
    doctor_verification,
    doctor_verification_docs,
    doctor_verification_notes,
    document_types,
    draft_contract,
    draft_website,
    edit_contract_adjustment,
    edit_contract_records,
    email_details,
    email_error,
    email_error_webhook,
    email_history,
    email_product_configuration,
    email_records,
    email_request_details,
    email_response_details,
    email_templates,
    email_templates_2,
    email_templates_dummy,
    email_templates_language,
    email_token,
    email_triggers_templates,
    emails_sent,
    enterprise_access_menu_map,
    enterprise_access_roles,
    enterprise_admin_profile,
    enterprise_device,
    enterprise_location_types,
    enterprise_menu_items,
    enterprise_profile,
    entities,
    error_logs,
    event_admin,
    event_details,
    event_notes,
    event_socket,
    event_triggers,
    events,
    faq,
    faq_categories,
    faq_tags,
    faq_tags_link,
    faq_types,
    faq_v2,
    faq_v2_bkp,
    feature_list,
    file_upload_links,
    finance_errors,
    financer_departments,
    financer_device,
    financer_profile,
    financing_drafts,
    financing_type,
    firebase_events,
    global_email_logs,
    global_errors,
    global_logs,
    guarantee_type,
    guaranteed_logs,
    guaranteed_recovery,
    imp_updates_stripe,
    industries,
    inquiry_email_sent_records,
    instant_payout_support_banks,
    institute_bank,
    institute_device,
    institute_notifications,
    institute_person,
    institute_profile,
    institute_referrals,
    internal_email,
    invalid_email_cron,
    invalid_email_logs,
    late_fee_type,
    late_fees,
    lead_action_logs,
    lead_csv_error,
    lead_history,
    lead_sources,
    lead_status,
    leads,
    location_manager_device,
    location_manager_profile,
    logs_for_me,
    marketing_notes,
    mass_email_report,
    master_events,
    menu_items,
    menu_notes,
    micro_deposit_reminder,
    missing_notes,
    missing_partial_recovery,
    mobile_template,
    more_documents,
    multi_language,
    new_features,
    non_guaranteed_reason,
    notification_types,
    old_email_templates,
    open_api_webhook_subscribed,
    openai_conversations,
    openai_critical_errors,
    openai_fallbacks,
    openai_finetune_models,
    openai_models,
    openai_prompt_types,
    openai_prompts,
    openai_question_answer,
    openai_requests,
    openai_training_data,
    orp_payment_values,
    otp_type,
    panel_video_links,
    partial_payments,
    partner_alternate_contacts,
    partner_alternate_email,
    partner_alternate_mobile,
    partner_answers,
    partner_assets_files,
    partner_assets_folders,
    partner_auth_token_mapping,
    partner_bank,
    partner_business_card,
    partner_contract_share,
    partner_contract_share_doctor_settings,
    partner_course_badges,
    partner_device,
    partner_doctor_referrals,
    partner_domains,
    partner_domains_dummy,
    partner_educational_email,
    partner_events,
    partner_notes,
    partner_notifications,
    partner_parents,
    partner_payments,
    partner_payouts,
    partner_popup_status,
    partner_profile,
    partner_quiz_answers,
    partner_quiz_questions,
    partner_read_courses,
    partner_referrals,
    partner_settings,
    partner_share,
    partner_stripe_verification,
    partner_testimonials,
    partner_transfers,
    partner_verification,
    partner_verification_docs,
    partner_verification_links,
    partner_verification_notes,
    partner_websites_shared,
    partnerdata,
    pat_csv,
    patient_address,
    patient_alternate_contacts,
    patient_alternate_email,
    patient_alternate_mobile,
    patient_chk,
    patient_contract,
    patient_device,
    patient_f_requests,
    patient_financing,
    patient_financing_1,
    patient_financing_gp,
    patient_financing_gp_logs,
    patient_financing_history,
    patient_notes,
    patient_notifications,
    patient_payment_source,
    patient_plans,
    patient_profile,
    patient_verification_notes,
    paul_payouts,
    paul_transfers,
    payback_main,
    payback_transfer_errors,
    payback_transfers,
    payment_alerts,
    payment_claim_details,
    payment_financing_error,
    payment_intent,
    payment_intent_3d,
    payment_links,
    payment_process_email_logs,
    payment_process_link,
    payment_process_link_subscription,
    payment_process_record,
    payment_process_subscription_records,
    payment_process_subscription_tags,
    payment_process_subscriptions,
    payment_source,
    payment_type,
    payout_email_logs,
    pdp_plan_history,
    persona_other_documents,
    persona_verification,
    pf_status,
    plaid_account,
    plaid_error_logs,
    plaid_link_token,
    plans,
    plans_reason_list,
    plans_reason_user,
    platform_payouts,
    platform_transfers,
    pp_buss_docs,
    pp_doc_types,
    pp_documents,
    pp_subscription_notes,
    practice_type,
    preapproval_buttons,
    preapproval_followup,
    preapproval_leads,
    preapproval_leads_notes,
    preapproval_resend_link,
    products,
    profit_loss_stats_history,
    promotional_offer_notes,
    promotional_offer_types,
    promotional_offers,
    proposal_reason_list,
    proposal_reason_users,
    proposal_reminder,
    prospects,
    push_notification_content,
    push_notification_sent,
    push_notification_templates,
    queries_without_callback,
    questions,
    rating,
    rating_links,
    recuvery_email_status,
    reminder_link_opened_history,
    reminder_settings,
    reminder_templates,
    request_logs,
    request_logs_v2,
    request_marketing,
    reseller_referrals,
    resellerdata,
    resend_contract_changes_requests,
    review_platforms,
    ring_access_token,
    roles,
    saved_contracts,
    settlement_contract_reminder,
    settlement_contracts,
    settlement_doctor_payments,
    settlement_payments_arrangement,
    settlement_reminder,
    short_link_service,
    sms_content,
    sms_history,
    sms_sent_status,
    social_healthcare_payments,
    socket,
    special_notes,
    speciality_type,
    split_app_request,
    split_bulk_uploads,
    split_email_logs,
    split_errors,
    split_logs,
    split_upload_errors,
    ssn_verification,
    state_timezone,
    states,
    statuses,
    stripe_charges,
    stripe_doc_error,
    stripe_errors,
    stripe_financial_account,
    stripe_identity_verification,
    stripe_temp_data,
    stripe_transfers,
    sub_industries,
    subadmin_device,
    subadmin_profile,
    subscription_action_type,
    subscription_card_links,
    subscription_contract_notes,
    subscription_contracts,
    subscription_feature,
    subscription_news_letter,
    subscription_notes,
    subscription_payment_intents,
    subscription_payments,
    subscription_plan,
    subscription_reminder,
    subscription_transaction,
    subscriptions,
    subscriptions_requests,
    support_data,
    system_constant,
    system_settings,
    table_audit_logs,
    temp_claims,
    test,
    test_ack_email,
    testify_otp,
    time_slot_types,
    timezone,
    trainers,
    training_answers,
    training_link_tokens,
    training_questions,
    training_screens,
    training_screens_completed,
    training_statuses,
    training_types,
    transaction_fee_details,
    transaction_fee_errors,
    transaction_fee_types,
    transfer_reversals,
    treatment_categories,
    treatment_codes,
    treatment_document,
    tutorial_videos,
    tutorial_videos_history,
    twilio_incoming_alerts,
    unknown_transfers,
    unmatched_payouts,
    unpaid_urgent_notes,
    unsubscribed_templates,
    user_events_time_slots,
    user_otp,
    user_roles,
    user_sockets,
    user_weekly_preferences,
    user_weekly_preferences_time_slots,
    users_review,
    validity_document_tickets,
    waiver_deductions,
    web_app_links,
    webhook_failed_emails,
    webhook_logs,
    website_hosting,
    website_theme,
    welcome_kit,
    welcome_kit_notes,
    wordpress_table,
    wp_contact_queries,
    wp_contact_queries_history,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
