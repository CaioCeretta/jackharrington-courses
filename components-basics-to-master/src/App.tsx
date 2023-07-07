import React, { ReactElement, ReactNode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const HeadingFC: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

//Conventional props
function Heading({ title }: { title: string }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

//Conventional props with content
function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
}

//Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

//  function ContainerWithDefault({heading, children}: {children: ReactNode} & typeof defaultContainerProps): ReactElement {
//   return (
//     <div>
//     <h1 style={{display: 'inline'}}>{heading}</h1>{children}
//     </div>
//   )
//  }

// ou

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;



//Functional Properties
function TextWithNumber({
  children,
  header,
}: {
  children: (num: number) => ReactNode;
  header: (num: number) => ReactNode;
}) {
  //Equivalente à useState<number>(1)
  const [state, setState] = useState(1);

  return (
    <div>
      <h2>{header?.(state)}</h2>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState((prev) => prev + 1)}>Add Click</button>
      </div>
    </div>
  );
}

function ContainerWithDefault({
  heading,
  children,
}: ContainerProps): ReactElement {
  return (
    <div>
      <h1 style={{ display: "inline" }}>{heading}</h1>
      {children}
    </div>
  );
}

//List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

//Class component
class MyHeader extends React.Component <{
  title: ReactNode
}> {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

ContainerWithDefault.defaultProps = defaultContainerProps;

function App() {
  return (
    <div className="App">
      <Heading title="Hello There"></Heading>
      <HeadingWithContent>
        <strong>Hi</strong>
      </HeadingWithContent>
      <ContainerWithDefault>Foo</ContainerWithDefault>
      <TextWithNumber header={(num: number) => <span>Header: {num}</span>}>
        {(num: number) => <div>Today's number is: {num}</div>}
      </TextWithNumber>
      <List
        items={["Caio", "ALEX", "bruno", "thiago"]}
        render={(item: string) => <div> {item.toLocaleLowerCase()} </div>}
      ></List>
      <MyHeader title="class component" />
    </div>
  );
}

export default App;
