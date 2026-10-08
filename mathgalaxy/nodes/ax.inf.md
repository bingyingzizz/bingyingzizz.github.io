# 无穷公理　`ax.inf`
无穷公理（Axiom of Infinity）
layer 0 · 公理 · ZFC 公理系统 · 集合论

存在一个「归纳集」——含有 $\emptyset$ 且对后继封闭的集合：

$$\exists I [ \emptyset \in I \wedge  \forall x ( x \in I \to x \cup \{ x \} \in I ) ]$$

公理本身只要求 $I$ **非空**且对后继封闭；写成 $\emptyset \in I$ 只是为了好看，$\emptyset$ 是原始对象（见「空集」）。
这条公理宣告了无穷集合的存在，是从中构造自然数集 $\omega$ 的唯一来源。

## 它能推出什么 / 谁在用它
- ⇒ `thm.omega` 自然数集存在

refs: Kunen, Set Theory, I.5

> 说明见 `notes/ax.inf.md`
