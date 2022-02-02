# MIND UI Library
Бибилиотека компонент, использующихся в наших продуктах

## Установка
Установка происходит через [npm](https://www.npmjs.com/package/@ermolaev/mind-ui)
```
npm i @ermolaev/mind-ui
```

## Использование
Просто импортируйте нужные компоненты 
``` ts
import { Button } from "@ermolaev/mind-ui";

export const TestComponent = () => {
  return (
    <Button
      click={() => console.log("Handle click")}
      title="Войти"
    />
  );
}
```

## Доступные компоненты
Смотрите наш [storybook](https://mind-team.github.io/mind-ui/?path=/story/example-introduction--page)

## Документация
В нашем [storybook](https://mind-team.github.io/mind-ui/?path=/story/example-introduction--page) 
есть документация на каждый компонент
