import {Field, Form, Formik} from "formik";
import {Button, Checkbox, FormControlLabel, FormGroup, Grid, styled, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import axios from "axios";

const StyledButton = styled(Button) ({
  borderRadius: '40px',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: 'rgb(47,108,162)',
    color: '#fff'
  },
})

const regionsTranslate = {
  vinnytsia: "Вінницька",
  volyn: "Волинська",
  dnipropetrovsk: "Дніпропетровська",
  donetsk: "Донецька",
  zhytomyr: "Житомирська",
  zakarpattia: "Закарпатська",
  zaporizhzhia: "Запорізька",
  ivano_frankivsk: "Івано-Франківська",
  kyiv: "Київська",
  kirovohrad: "Кіровоградська",
  luhansk: "Луганська",
  lviv: "Львівська",
  Lviv: "Львівська",
  mykolaiv: "Миколаївська",
  odessa: "Одеська",
  poltava: "Полтавська",
  rivne: "Рівненська",
  sumy: "Сумська",
  ternopil: "Тернопільська",
  kharkiv: "Харківська",
  kherson: "Херсонська",
  khmelnytskyi: "Хмельницька",
  cherkasy: "Черкаська",
  chernivtsi: "Чернівецька",
  chernihiv: "Чернігівська",
  crimea: "Крим"
}

const ageGroups = ['19-24', '25-30', '31-40', '41-50', '>50'];
const statusGroups = ['Ветеран', 'Член родини'];
const groupGroups = ["Фізичне здоров'я", "Ментальне здоров'я", 'Плацевлаштування', 'Стосунки', 'Проблеми з житлом', 'Соціалізація'];
const messengerGroups = ['Viber', 'Telegram', 'Messenger'];

const initialValues = {
  templateName: '',
  mail: '',
  regions: [],
  age: [],
  status: [],
  group: [],
  messenger: [],
}

export const MailingTemplate = () => {
  const [ regions, setRegions] = useState([]);
  const [ loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)

    axios.get('https://team-10-12.onrender.com/handbook/regions')
      .then( (response) => setRegions(response.data))
      .catch( (error)=> console.log(error))
      .finally(()=> setLoading(false))
  }, []);


  const handleCreate = async (values) =>{
    setLoading(true)

    await axios.post('https://team-10-12.onrender.com/mailing', values)
      .catch( (error)=> console.log(error))
      .finally(()=> setLoading(false))

  }


  return <>  <Formik
    initialValues={initialValues}
    onSubmit={handleCreate}
  >
    <Form>
      <Grid container flexDirection='row' spacing={3}>
        <Grid item xs={12}>
          <Field name="templateName">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Назва"
                placeholder="Назва"
                fullWidth
                error={meta.touched && meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>
        </Grid>

        <Grid item xs={12} mt={2} mb={2}><Typography variant='h4' gutterBottom>Сегментація користувачів</Typography></Grid>

        <Grid item xs={12} display='flex' flexWrap='wrap' >
          <Grid item xs={12}><Typography variant='h5' gutterBottom>Область</Typography></Grid>
          {regions.map((region) => (
            <Grid xs={3}>
            <Field
              key={region}
              type="checkbox"
              name="regions"
              value={region}
            >
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={regionsTranslate[region]}
                />
              )}
            </Field>
            </Grid>
          ))}
        </Grid>

        <Grid item xs={3} >
          <Typography variant='h5' gutterBottom>Вік</Typography>
          {ageGroups.map((age) => (
            <Grid xs>
            <Field
              key={age}
              type="checkbox"
              name="age"
              value={age}
            >
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={age}
                />
              )}
            </Field>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={3} >
          <Typography variant='h5' gutterBottom>Статус</Typography>
          {statusGroups.map((status) => (
            <Grid xs>
              <Field
                key={status}
                type="checkbox"
                name="status"
                value={status}
              >
                {({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label={status}
                  />
                )}
              </Field>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={3} >
          <Typography variant='h5' gutterBottom>Група</Typography>
          {groupGroups.map((group) => (
            <Grid xs>
              <Field
                key={group}
                type="checkbox"
                name="group"
                value={group}
              >
                {({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label={group}
                  />
                )}
              </Field>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={3} >
          <Typography variant='h5' gutterBottom>Месседжер</Typography>
          {messengerGroups.map((messenger) => (
            <Grid xs>
              <Field
              key={messenger}
              type="checkbox"
              name="messenger"
              value={messenger}
            >
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={messenger}
                />
              )}
            </Field></Grid>

          ))}
        </Grid>

        <Grid item xs={12} >
          <Typography variant='h5' gutterBottom>Текст Розсилки</Typography>
          <Field name="mail">
            {({ field, meta }) => (
              <TextField
                {...field}
                label="Текст"
                placeholder="Текст"
                fullWidth
                multiline
                minRows={4}
                error={meta.touched && meta.error}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>
        </Grid>

        <Grid item xs={12} >
          <StyledButton type="submit" variant='contained'>Зберегти шаблон</StyledButton>
        </Grid>
      </Grid>
    </Form>
  </Formik></>
}
