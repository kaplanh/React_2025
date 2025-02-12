# JSX, Props and map

## JSX and Rules

[Babel](https://babeljs.io/)
**Babel is a JavaScript compiler.Babel can convert JSX syntax!**

```
1.  parent div or fragment(<></>)

      function Header() {
        return (
            <div className="title">
               <h1>Team Members</h1>
               <p>
                 Lorem ipsum dolor sit amet,
               </p>
            </div>
         );
      }



2. br> => <br/> and <img> => <img/>
3. class => className
4. for => htmlFor
5. <h1>count<h1/> => <h1>{count}<h1/> or  <img src={url}/>

```

## Props

**Parent Component**

```
{teamMembersData.map((member) => (
                <TeamMember
                    key={member.name}
                    name={member.name}
                    description={member.description}
                    image={member.image}
                    codepenLink={member.codepenLink}
                    codepenName={member.codepenName}
                    isCofunder={member.isCofunder}
                />
            ))}

```

**Child Component**

```
function TeamMember({
    name,
    description,
    image,
    codepenLink,
    codepenName,
    isCofunder,
}) {
    // console.log(props);

    return (
        <li className={`member ${isCofunder ? "co-funder" : ""}`}>
            <div className="thumb">
                <img src={image} />
            </div>
            <div className="description">
                <h3>{name}</h3>
                <p>
                    {description}
                    <br />
                    <a href={codepenLink}>{codepenName}</a>
                </p>
            </div>
        </li>
    );
}


```
