# Hölder 不等式 $\implies$ Minkowski 不等式
`imp.minkowski` · 推出 · strong 边 · 根 `../`

`thm.holder` Hölder 不等式 → `thm.minkowski` Minkowski 不等式

**① 拆开。** 对 $p > 1$，

$$|f+g|^p = |f+g| \cdot |f+g|^{p-1} \le \left( |f| + |g| \right) |f+g|^{p-1}$$

**② 两次 Hölder。** 对 $|f| \cdot |f+g|^{p-1}$ 与 $|g| \cdot |f+g|^{p-1}$ 分别用 Hölder（指数 $p$ 与 $q$，其中 $1/p + 1/q = 1$）：

$$\int |f+g|^p \le \left( \|f\|_p + \|g\|_p \right) \left( \int |f+g|^{(p-1)q} \right)^{1/q}$$

**③ 认出右边的积分。** 因为 $(p-1)q = p$，右边那个因子就是 $\|f+g\|_p^{\,p/q}$。于是

$$\|f+g\|_p^p \le \left( \|f\|_p + \|g\|_p \right) \|f+g\|_p^{\,p/q}$$

**④ 约掉。** 若 $\|f+g\|_p = 0$ 结论平凡；否则两边除以 $\|f+g\|_p^{p/q}$，注意 $p - p/q = 1$，即得

$$\|f+g\|_p \le \|f\|_p + \|g\|_p$$

> 续见 proofs/imp.minkowski.2.md
