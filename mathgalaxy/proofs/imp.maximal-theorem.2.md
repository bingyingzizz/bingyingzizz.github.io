# 覆盖引理 $\implies$ 极大定理
`imp.maximal-theorem` · 推出 · strong 边 · 根 `../`

`lem.covering` 覆盖引理 + `def.maximal-function` 极大函数 → `thm.maximal-theorem` 极大定理

$$c < 3^n \sum_j m(B_j) < (3^n/\alpha)\cdot\sum_j \int_{B_j} |f| dy \le (3^n/\alpha)\cdot\int_{\mathbb{R}^n} |f| dy$$

（最后一步用的是：$B_j$ 两两不交，所以把积分加起来不超过整体积分。）

**④ 令 $c \to m(E_\alpha )$。** 得到

$$m(E_\alpha) \le (3^n/\alpha)\cdot\int |f| dy$$

即 $C = 3^n$。∎

> ⭐ 整段只有一个「魔法」：覆盖引理保证挑出来的不交球虽然装不满 $E_\alpha$，但总测度至少是 $3^{-n}$ 倍 —— 恰好够用。
