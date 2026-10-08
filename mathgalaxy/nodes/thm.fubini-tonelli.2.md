# Fubini–Tonelli　`thm.fubini-tonelli`　·　续页（第 2 页）
根 `../`　·　第 1 页 `nodes/thm.fubini-tonelli.md`

## 陈述（续）
$$\int f d(\mu \times \nu) = \int_X ( \int_Y f(x, y) d\nu(y) ) d\mu(x) = \int_Y ( \int_X f(x, y) d\mu(x) ) d\nu(y)$$

**(b) Fubini（可积情形）**：若 $f \in L^1(\mu \times \nu)$，则
- $f_x \in L^1(\nu)$ 对 a.e. x 成立，$f^y \in L^1(\mu)$ 对 a.e. y 成立；
- $\int f_x d\nu \in L^1(\mu)$、$\int f^y d\mu \in L^1(\nu)$（都在 a.e. 意义下有定义）；
- 上面那两个三重等式同样成立。
