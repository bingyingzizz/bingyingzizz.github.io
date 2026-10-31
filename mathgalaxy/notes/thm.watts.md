# 张量函子的刻画　`thm.watts`　·　说明
根 `../`

**证明（自由模上验、右正合推广）。**
**① $F(R)$ 是 $R$-模。** $R$ 上的左乘给出 $\operatorname{End}_{R\text{-}\mathbf{Mod}}(R) \cong R^{\mathrm{op}}$ 的作用；$F$ 把它送到 $F(R)$ 的自同态，于是 $F(R)$ 自动带上模结构 ✓（交换环上左右不分，可以就写 $R$）。
**② 自由模上成立。** 对 $M = R^{(I)} = \bigoplus_{i \in I} R$，保直和给出
$$F\bigl(R^{(I)}\bigr) \cong \bigoplus_{i} F(R) \cong R^{(I)}\otimes_{R} F(R)$$
（最后一步是「自由模张量＝按系数重排」）✓。
**③ 一般模上由右正合推过去。** 取自由表现 $R^{(J)} \to R^{(I)} \to M \to 0$。$F$ 右正合，保这个右正合列；而 $M\otimes_{R}-$ 也右正合，保同一个右正合列。② 给出两端（$R^{(I)}$ 与 $R^{(J)}$ 处）的自然同构，于是两行比较、用「$F(M) \to M\otimes F(R)$ 那个自然变换在两侧都是同构」以及五项（或三项）引理，中间也是同构 ✓。
说明：那个自然变换 $\tau_{M} : F(M) \to M\otimes_{R} F(R)$ 的构造是「$M$ 的元素沿 $R \to M$ 送入、再作用 $F$」的

> 续见 notes/thm.watts.2.md
