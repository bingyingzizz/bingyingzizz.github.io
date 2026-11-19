# imp.watts
`imp.watts` · 推出 · strong 边 · 根 `../`

`def.additive-functor` 加法函子 + `def.exact-functor` 正合函子 + `def.module-category` 模范畴 + `def.natural-transformation` 自然变换 + `thm.five-lemma` 五引理 → `thm.watts` 张量函子的刻画

**证明（自由模上验、右正合推广）。**
**① $F(R)$ 是 $R$-模。** $R$ 上的左乘给出 $\operatorname{End}_{R\text{-}\mathbf{Mod}}(R) \cong R^{\mathrm{op}}$ 的作用；

$F$ 把它送到 $F(R)$ 的自同态，于是 $F(R)$ 自动带上模结构 ✓（交换环上左右不分，可以就写 $R$）。
**② 自由模上成立。** 对 $M = R^{(I)} = \bigoplus_{i \in I} R$，保直和给出
$$F\bigl(R^{(I)}\bigr) \cong \bigoplus_{i} F(R) \cong R^{(I)}\otimes_{R} F(R)$$
（最后一步是「自由模张量＝按系数重排」）✓。
**③ 一般模上由右正合推过去。** 取自由表现 $R^{(J)} \to R^{(I)} \to M \to 0$。

$F$ 右正合，保这个右正合列；而 $M\otimes_{R}-$ 也右正合，保同一个右正合列。

> 续见 proofs/imp.watts.2.md
