# 类方程　`thm.class-equation`
定理（类方程）：$|G| = |Z(G)| + \sum [G : C_G(x_i)]$
layer 11 · 定理 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=thm.class-equation)　·　[节点索引](../index.md)

设 $G$ 是有限群，$Z(G)$ 是它的中心，$x_1, \ldots, x_r$ 是**非中心共轭类**的一组代表元，$C_G(x) := \{g : gx = xg\}$ 是中心化子。则

$$|G| = |Z(G)| + \sum_{i=1}^{r} \bigl[ G : C_G(x_i) \bigr]$$

其中每一项 $[G : C_G(x_i)]$ 都整除 $|G|$，且 $\ge 2$。

**推论**：若 $|G| = p^{n}$（$p$ 素、$n \ge 1$），则 $p \mid |Z(G)|$，特别地 $Z(G) \ne \{e\}$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.sylow`](../nodes/thm.sylow.md) Sylow 定理

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.class-equation.2.md](./thm.class-equation.2.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §4.3

> 说明见 `notes/thm.class-equation.md`

引用：`thm.class-equation`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
