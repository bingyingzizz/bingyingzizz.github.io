# 良序性 $\implies$ 递归定理
`imp.recursion-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 + `ax.repl` 替换公理模式 + `ax.sep` 分离公理模式 → `thm.recursion-wellorder` 超限递归

**④ 超限归纳。** 设 $W \setminus S$ 非空，取它的最小元 $w$。则 $W_{< w} \subseteq S$，由假设 $w \in S$，矛盾。故 $S = W$。∎

> ① 是唯一性、②③ 是存在性。整个证明里**只用**了良序性、替换公理模式与分离公理模式 —— 没有用选择公理，也没有用幂集公理。② 对 $G$ 是**真类函数**的情形照样成立：收集 $y = G(f)$ 靠的是替换公理模式，而不是「$G$ 的值域之并的幂集」—— 真类函数没有这个值域。
