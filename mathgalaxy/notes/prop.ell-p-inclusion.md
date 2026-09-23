# ℓ^p ⊆ ℓ^q　`prop.ell-p-inclusion`　·　说明
根 `../`

这里 $\ell^p$ 是**计数测度**下的 $L^p$ —— 没有「局部爆破」可言，只剩「衰减」。

证明：先看 $q = \infty$。由 $|f|^p$ 的每一项都不超过总和，



$$\|f\|_\infty^p = \sup_{\alpha} |f(\alpha)|^p \le \sum_{\alpha} |f(\alpha)|^p = \|f\|_p^p$$

故 $\|f\|_\infty \le \|f\|_p$。一般 $q < \infty$ 用插值：



$$\|f\|_q \le \|f\|_p^{p/q} \|f\|_\infty^{1-p/q} \le \|f\|_p$$

（第二个不等号把 $\|f\|_\infty \le \|f\|_p$ 代进去。）∎

⭐ 方向记法：**指数越大，空间越小**（在 $\ell^p$ 里）—— 因为要求「衰减更快」。
