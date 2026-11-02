# 积分形式的 Taylor 余项 + 对称矩阵的光滑配方 $\implies$ Morse 引理
`imp.morse-lemma` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.mixed-partials` 混合偏导相等 → `thm.morse-lemma` Morse 引理

**第四步：把 $\sigma_i$ 吸收进坐标。** 令 $u_i := \sqrt{\varepsilon_i\sigma_i(x)}\; y_i(x)$。因 $\sigma_i > 0$，$u$ 是 $a$ 附近的光滑坐标（$Du(a)$ 可逆），而

$$f - f(a) = \sum_i \varepsilon_i u_i^{2}$$

**第五步：$\varepsilon_i$ 的符号个数 = Morse 指数。** 由 $h(a) = \frac{1}{2}H_f(a)$ 与合同变换保惯性（Sylvester 惯性定律），负号的个数正是 $H_f(a)$ 的负特征值个数 $k$。∎

> ⭐ 第一步的积分写法是这条证明的技术核心：**它把 $o(\|x-a\|)$ 级别的余项变成了一个显式光滑的矩阵函数**，于是配方可以光滑地进行。若用 Lagrange 余项，$\theta$ 依赖 $x$，配方就不是光滑的了。
