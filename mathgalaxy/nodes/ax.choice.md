# 选择公理　`ax.choice`
选择公理（Axiom of Choice, AC）
layer 9 · 公理 · 选择原理 · 集合论

任意一族非空集合都可以「同时」各挑出一个元素。写成选择函数的形式：

$$\forall F [ ( \forall X \in F, X \ne \emptyset ) \to \exists f ( f\text{ 是函数} \wedge  \operatorname{dom} f = F \wedge  \forall X \in F, f(X) \in X ) ]$$

另一种常见形式（两两不交形式）：若 $F$ 是两两不交的非空集合族，则存在集合 $C$，使对每个 $X \in F$ 都有 $|C \cap X| = 1$。
> 陈述续见 `nodes/ax.choice.2.md`


## 为什么成立（入边，证明在 proofs/）
- `lem.zorn` 佐恩引理：佐恩引理 $\implies$ 选择公理（路线 $2\implies1$）　proofs/imp.zorn-choice.md
- `thm.wellordering` 良序定理：选择公理 $\iff$ 良序定理　proofs/eq.ac-wo.md
- `def.choicefn` 选择函数：用到了定义 选择函数　proofs/def-link.ac-choicefn.md

## 它能推出什么 / 谁在用它
- ⟺ `thm.wellordering` 良序定理
- ⇒ `lem.zorn` 佐恩引理

- …另有出边，续页见 `nodes/ax.choice.3.md`

refs: Jech, The Axiom of Choice；Kunen, Set Theory, I.12

> 说明见 `notes/ax.choice.md`
