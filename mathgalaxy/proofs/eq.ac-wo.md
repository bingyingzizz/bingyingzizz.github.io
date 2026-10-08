# 选择公理 $\iff$ 良序定理
`eq.ac-wo` · 等价 · strong 边 · 根 `../`

`ax.choice` 选择公理 → `thm.wellordering` 良序定理

**选择公理 ⇒ 良序定理（路线 1⟹4）**

设 $X$ 是集合。$X = \emptyset$ 时平凡，以下设 $X \ne \emptyset$。

1. 由 AC，非空子集族 $\mathcal{P}(X) \setminus \{\emptyset \}$ 上有选择函数 $\varphi$，即 $\varphi (A) \in A$ 对每个非空 $A \subseteq X$ 成立。

2. 用超限递归往下取元素：对序数 $\alpha$，只要余集非空就令

$$x(\alpha) = \varphi( X \setminus \{ x(\beta) : \beta < \alpha \} )$$

一旦余集为空就停止。

> 续见 proofs/eq.ac-wo.2.md
