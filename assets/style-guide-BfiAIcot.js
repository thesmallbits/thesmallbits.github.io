import{n as o}from"./chunk-CyzFmspp.js";import{t as l}from"./jsx-runtime-xwFT6IXg.js";import"./react-D5d2UqJc.js";import{t as c}from"./compiler-runtime-CF5tw-NV.js";var d=c(),n=o(l(),1);function a(s){const e=(0,d.c)(2),{text:r}=s;let t;return e[0]!==r?(t=(0,n.jsxs)("p",{children:["Loaded from sample: ",r]}),e[0]=r,e[1]=t):t=e[1],t}const m="this is a variable imported from mdx file";function h(){return"This is a component imported from mdx file"}function i(s){const e={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Rules and regulations (and features) while writing mdx"}),`
`,(0,n.jsxs)(e.blockquote,{children:[`
`,(0,n.jsx)(e.p,{children:"MDX has (almost) all features of normal markdown"}),`
`]}),`
`,(0,n.jsx)(e.h2,{children:"Headers"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:`# Header 1
## Header 2
...
###### Header 6
`})}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Headers when clicked copy the URL to directly focus onto them"}),`
`,(0,n.jsx)(e.li,{children:"Only the first header of the file should be a Header-1 (single hash)"}),`
`]}),`
`,(0,n.jsx)(e.h2,{children:"Text formatting"}),`
`,(0,n.jsxs)(e.ol,{children:[`
`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Bold"})," ",(0,n.jsx)(e.code,{children:"**Bold**"})]}),`
`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.em,{children:"italics"})," ",(0,n.jsx)(e.code,{children:"_italics_"})]}),`
`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.del,{children:"striked"})," ",(0,n.jsx)(e.code,{children:"~striked~"})]}),`
`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"inline code"})," ",(0,n.jsx)(e.code,{children:"`inline`"})]}),`
`,(0,n.jsx)(e.li,{children:"Code blocks"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"```<language>\n<code>\n```\n"})}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-py",children:`for i in range(10):
    print("hello")
`})}),`
`,(0,n.jsxs)(e.ol,{start:"6",children:[`
`,(0,n.jsx)(e.li,{children:"Tables - normally"}),`
`]}),`
`,(0,n.jsx)(e.h2,{children:"Embedding images"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["Save images in ",(0,n.jsx)(e.code,{children:"/public/images"})," folder and reference them here using ",(0,n.jsx)(e.code,{children:"/images/<image name>"})]}),`
`,(0,n.jsxs)(e.li,{children:["Or alternatively use the ",(0,n.jsx)(e.code,{children:"<Image/>"})," component (defined ",(0,n.jsx)(e.a,{href:"https://github.com/thesmallbits/thesmallbits.github.io/blob/main/src/components/MDXImage/Image.tsx",children:"here"}),")"]}),`
`,(0,n.jsxs)(e.li,{children:["DO NOT directly use the ",(0,n.jsx)(e.code,{children:"<img/>"})," tag to embed images since they wont get styled automatically"]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:(0,n.jsx)(e.code,{children:"![BFOP](/images/BFOP.png)"})}),`
`,(0,n.jsx)(e.p,{children:"Preview"}),`
`,(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:"/images/BFOP.png",alt:"BFOP"})}),`
`,(0,n.jsx)(e.h2,{children:"Embedding React components"}),`
`,(0,n.jsx)(e.p,{children:"Since we are using MDX we can import and export any component to and from the .mdx files"}),`
`,(0,n.jsx)(e.p,{children:"There are two ways to go about when including custom components"}),`
`,(0,n.jsxs)(e.ol,{children:[`
`,(0,n.jsx)(e.li,{children:"Direct imports"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import MyComponent from "@/components/MyComponent";

<MyComponent />;
`})}),`
`,(0,n.jsx)(e.p,{children:"Example"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import Sample from "@/components/Sample"
<Sample text={"this is it being directly imported into the mdx file"/> <Sample text={"this is it being directly imported into the mdx file"/>
`})}),`
`,`
`,(0,n.jsx)(a,{text:"this is it being directly imported into the mdx file"}),`
`,(0,n.jsxs)(e.ol,{start:"2",children:[`
`,(0,n.jsxs)(e.li,{children:["We define it globally by adding it to the global ",(0,n.jsx)(e.code,{children:"Elements"})," map object",`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["Goto ",(0,n.jsx)(e.em,{children:"/src/content/registry.ts"})]}),`
`,(0,n.jsxs)(e.li,{children:["Import and add the element component to the object passed to ",(0,n.jsx)(e.code,{children:"generateElementsFrom"})," function, and then directly reference that component here"]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`import { generateElementsFrom } from "@d1vij/jassm";
import Sample from "@/components/Sample";

export const Elements = generateElementsFrom(
  {
    Sample, // this will automatically be injecting in all mdx files
  },
  true,
);
`})}),`
`,(0,n.jsxs)(e.blockquote,{children:[`
`,(0,n.jsxs)(e.p,{children:["the build step ",(0,n.jsx)(e.strong,{children:"WONT FAIL"})," if the compiler is unable to resolve the component at build time, instead it would fail at runtime"]}),`
`]}),`
`,(0,n.jsx)(e.h2,{children:"Embedding js"}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsxs)(e.li,{children:["You can also embedded js expression into mdx by wrapping the expression in ",(0,n.jsx)(e.code,{children:"{}"})]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"Example"}),`
`,(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"{Date.now()}"})," => ",Date.now()]}),`
`,(0,n.jsxs)(e.ul,{children:[`
`,(0,n.jsx)(e.li,{children:"Since compiled mdx is just a react component, you can import-export anything from it"}),`
`]}),`
`,(0,n.jsxs)(e.ol,{children:[`
`,(0,n.jsx)(e.li,{children:"Importing from somwehre"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:`import {value} from "@/components/Sample"

Imported value is {value}
`})}),`
`,`
`,(0,n.jsxs)(e.p,{children:["Imported value is ",10]}),`
`,(0,n.jsxs)(e.ol,{start:"2",children:[`
`,(0,n.jsx)(e.li,{children:"Exporting something from the mdx file into a mdx file"}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"Stuff like components, variables etc can be exported from mdx files"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:`import {
valueFromMDX,
ComponentFromMdx
} from "@/assets/mdx/export_sample.mdx";

{valueFromMDX}

<ComponentFromMdx/>
`})}),`
`,`
`,m,`
`,(0,n.jsx)("br",{}),`
`,(0,n.jsx)(h,{}),`
`,(0,n.jsxs)(e.ol,{start:"2",children:[`
`,(0,n.jsx)(e.li,{children:"Exporting something from mdx file into React files"}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"Components and variables can be imported from mdx files in two ways"}),`
`,(0,n.jsxs)(e.ol,{children:[`
`,(0,n.jsx)(e.li,{children:"Direct import from mdx file"}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:`import {
  valueFromMDX,
  ComponentFromMdx,
} from "@/assets/mdx/blogs/export_sample.mdx";

console.log(valueFromMDX);
`})}),`
`,(0,n.jsxs)(e.ol,{start:"2",children:[`
`,(0,n.jsxs)(e.li,{children:["Using the ",(0,n.jsx)(e.code,{children:"registry.getExport()"})," method if the file is registered in in the registry (see ",(0,n.jsx)(e.a,{href:"#working-with-registry",children:"working with registry"}),")"]}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:`import {registry} from "@/content/registry";
const exports =
`})}),`
`,(0,n.jsx)(e.h2,{children:"Working with registry"}),`
`,(0,n.jsx)(e.p,{children:'The "registry" is at its core a mapping of virtual paths to real path of .mdx files'}),`
`,(0,n.jsxs)(e.h3,{children:["0. Create a ",(0,n.jsx)(e.code,{children:"module"})," object from the source directory"]}),`
`,(0,n.jsxs)(e.p,{children:["The object returned by ",(0,n.jsx)(e.code,{children:"import.meta.glob"})," consists of all the files matching a specific pattern."]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:`const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");
`})}),`
`,(0,n.jsx)(e.h3,{children:"1. Generating a registry"}),`
`,(0,n.jsx)(e.p,{children:"the Registry class constructor takes in the following things"}),`
`,(0,n.jsxs)(e.ol,{children:[`
`,(0,n.jsxs)(e.li,{children:["The ",(0,n.jsx)(e.code,{children:"module"})," object returned by import.meta.glob"]}),`
`,(0,n.jsxs)(e.li,{children:["The ",(0,n.jsx)(e.code,{children:"source"})," folder"]}),`
`,(0,n.jsxs)(e.li,{children:["The virtual path (",(0,n.jsx)(e.code,{children:"mountOn"}),") on which the files will be mounted"]}),`
`,(0,n.jsxs)(e.li,{children:["A ",(0,n.jsx)(e.code,{children:"records"})," object containing map between virtual name and the path of target file relative to the ",(0,n.jsx)(e.code,{children:"source"})," folder"]}),`
`]}),`
`,(0,n.jsx)(e.p,{children:"For example, if the directory structure is like this"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:`src/
├── assets
│   └── mdx
│       ├── blogs
│       │   ├── chemistry
│       │   │   └── BeckmanRearrangement.mdx
│       │   │   └── BeckmanRearrangement.mdx
│       │   ├── ├── physical
│       │   │   │  └── Electrochemistry.mdx
│       │   ├── maths
│       │   │   └── IndefiniteIntegration.mdx
│       │   ├── physics
│       │   │   └── Electrostatics.mdx
│       │   └── info.mdx
`})}),`
`,(0,n.jsx)(e.p,{children:"Then the process of creating registries would be"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:`import { Registry } from "@d1vij/jassm";

// glob all the mdx files inside the /src/assets/mdx folder and its decendents
const modules = import.meta.glob("/src/assets/mdx/**/*.mdx");

const chemistry = new Registry({
  modules,
  source: "/chemistry", // root folder becomes the /src/assets/mdx/chemistry folder
  mountOn: "/blogs/chemistry", // All records will be prefixed by this path
  records: {
    "/beckmann-rearrangement": "/BeckmanRearrangement.mdx",
    "/electrochemistry": "/physical/Electrochemistry.mdx", // /src/assets/mdx/chemistry/physical/electrochemistry
  },
});

// similarly create maths and physics registries

// create a CoalescedRegistry which is a union of all the registries
const registry = new CoalescedRegistry(chemistry, maths, physics);
`})}),`
`,(0,n.jsx)(e.h3,{children:"2. Accessing components and Exports"}),`
`,(0,n.jsx)(e.p,{children:"Once a registry is defined, it can be exported to any other file or component and its corresponding MDX component and exports can be used via"}),`
`,(0,n.jsxs)(e.ol,{children:[`
`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:".getComponent(vpath)"})," method - Returns the lazy loaded component from the virtual path (virtual path is ",(0,n.jsx)(e.code,{children:"mountOn"})," + ",(0,n.jsx)(e.code,{children:"/"})," + ",(0,n.jsx)(e.code,{children:"virtual name"}),")"]}),`
`,(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:".getExport(vpath)"})," method - Returns the exported module object the virtual path (virtual path is ",(0,n.jsx)(e.code,{children:"mountOn"})," + ",(0,n.jsx)(e.code,{children:"/"})," + ",(0,n.jsx)(e.code,{children:"virtual name"}),")"]}),`
`]}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:`// import the component loader
import { MDXFromComponent } from "@d1vij/jassm";
// import the Elements
import { Elements } from "@/elements";
// import the stylemap
import { stylemap } from "@/stylemap";
// import the registry
import { registry } from "@/registry";
// use this Component wrapped inside a Suspense to provider better UX
function Foo() {
  // using the \`use()\` hook to resolve the import promise
  const exports = use(registry.getExport("/blogs/chemistry/electrochemistry"));
  const Component = exports.default;
  // or else
  const Component = registry.getComponent("/blogs/chemistry/electrochemistry");

  return (
    <div>
      {/* you should validate the exported object at runtime via some validation lib like zod or valibot */}
      {exports.meta.title}
      <MDXFromComponent
        source={Component}
        elements={Elements}
        styles={stylemap}
      />
    </div>
  );
}
`})}),`
`,(0,n.jsx)(e.h2,{children:"Blog Metadata"}),`
`,(0,n.jsxs)(e.p,{children:["Each blog ",(0,n.jsx)(e.strong,{children:"must"})," export a metadata object. The schema for which is present at ",(0,n.jsx)(e.code,{children:"/src/schemas/BlogExportSchema.ts"})]}),`
`,(0,n.jsx)(e.p,{children:"Example"}),`
`,(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-ts",children:`export const meta = {
  author: "Divij Verma",
  created_at: "26-02-2026",
  modified_at: "27-02-2026",
  tags: ["tutorial", "style guide", "mdx"],
};
`})}),`
`,(0,n.jsx)(e.p,{children:"If the exported meta is not upto the schema, runtime error will be raised"})]})}function u(s={}){const{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(i,{...s})}):i(s)}export{u as default};
