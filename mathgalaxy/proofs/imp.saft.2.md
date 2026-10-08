# 保极限 $\implies$ 有左伴随
`imp.saft` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.comma-category` 逗号范畴 → `thm.saft` 伴随函子定理

而 $X \to G(Y)$ 这一族随 $(Y,f)$ 变动是相容的（这正是逗号范畴态射的定义），于是它们拼成一个锥，泛性给出

$$\eta_{X} : X \longrightarrow G(F(X))$$

**伴随同构。** 对任意 $Y_{0} \in \mathcal{D}$，定义

$$\varphi : \operatorname{Hom}_{\mathcal{D}}\bigl(F(X), Y_{0}\bigr) \longrightarrow \operatorname{Hom}_{\mathcal{C}}\bigl(X,\ G(Y_{0})\bigr), \qquad \varphi \mapsto G(\varphi) \circ \eta_{X}$$

**满（造逆）。** 给定 $f : X \to G(Y_{0})$，则 $(Y_{0}, f)$ 是 $X \downarrow G$ 的一个对象，于是有投影 $\pi_{(Y_{0}, f)} : F(X) \to Y_{0}$。由 $\eta_{X}$ 的构造，$G(\pi_{(Y_{0},f)}) \circ \eta_{X} = f$，所以 $\varphi(\pi_{(Y_{0},f)}) = f$。

> 续见 proofs/imp.saft.3.md
