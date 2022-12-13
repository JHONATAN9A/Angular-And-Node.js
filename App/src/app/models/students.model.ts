export interface Students {
  success: boolean;
  msg:     string;
  data:    Data;
}

interface Data {
  ar_students: { [key: string]: ArStudent };
}

interface ArStudent {
  s_id:         string;
  code:         string;
  first_name:   string;
  last_name:    string;
  lv_id:        string;
  group:        string;
  email:        string;
  phone_number: string;
  geolocation:  string;
  status:       string;
}
