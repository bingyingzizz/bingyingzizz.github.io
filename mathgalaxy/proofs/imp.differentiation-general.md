# Lebesgue 集 + 可缩条件 $\implies$ 一般族的微分定理
`imp.differentiation-general` · 推出 · strong 边 · 根 `../`

`thm.lebesgue-set-full` Lebesgue 集几乎处处 + `def.shrinks-nicely` 可缩族 → `thm.differentiation-general` 可缩族的微分定理

设 $x \in L_f$，$\{E_r\}$ 可缩地趋于 $x$，即 $E_r \subseteq B(r,x)$ 且 $m(E_r) > \alpha\cdot m(B(r,x))$。

**① 关键估计（一行）。** 因为 $E_r \subseteq B(r,x)$，把积分域放大到球上只会变大；再用 $m(E_r) > \alpha m(B(r,x))$ 把分母换小：

$$\frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy \le \frac{1}{m(E_r)} \int_{B(r,x)} |f(y) - f(x)| dy \le (1/\alpha)\cdot m(B(r,x)) \int_{B(r,x)} |f(y) - f(x)| dy$$

**② 收尾。** 由 $x \in L_f$ 的定义，最右边当 $r \to 0$ 时趋于 0。故第一个极限为 0。

**③ 第二个极限。** 由

> 续见 proofs/imp.differentiation-general.2.md
