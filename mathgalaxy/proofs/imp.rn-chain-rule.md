# 换元公式与链式法则
`imp.rn-chain-rule` · 推出 · strong 边 · 根 `../`

`prop.integral-gives-ac` 积分给出绝对连续测度 + `prop.integrals-equal-iff` 何时两个函数积分处处相同 → `prop.rn-chain-rule` RN 导数的链式法则

设 $\nu \ll  \mu \ll  \lambda$。

**(a) 换元公式 $\int g d\nu = \int g \frac{d\nu}{d\mu} d\mu$。** 分四步爬：

$\cdot$ $g = \chi_E$：左边是 $\nu(E) = \int_E \frac{d\nu}{d\mu} d\mu$（这正是 RN 定理的内容），右边同；
$\cdot g$ 是简单函数：由线性；
$\cdot$ $g \in L^+$：取简单函数列 $g_n \uparrow  g$，两边各用一次 MCT；
$\cdot$ $g \in L^1(\nu)$：拆正负部。

**(b) 链式法则。** 对任意可测 $E$，用 (a) 两次：

$$\nu(E) = \int_E \frac{d\nu}{d\mu} d\mu = \int_E \frac{d\nu}{d\mu} \cdot \frac{d\mu}{d\lambda} d\lambda$$

另一方面又有 $\nu(E) = \int_E \frac{d\nu}{d\lambda} d\lambda$（因为 $\nu \ll \lambda$）。两式对**一切** $E$ 相等，由「用积分识别函数」，两个密度 $\lambda -\text{a.e.}$ 相等：

> 续见 proofs/imp.rn-chain-rule.2.md
