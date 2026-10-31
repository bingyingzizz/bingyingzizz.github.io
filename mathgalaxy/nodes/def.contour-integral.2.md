# 复围道积分　`def.contour-integral`　·　续页（第 2 页）
[在星图里打开](../#n=def.contour-integral)　·　第 1 页 [nodes/def.contour-integral.md](./def.contour-integral.md)

## 陈述（续）
$$\int_\gamma f(z)\,\mathrm{d}z := \lim_{\text{分割}} \sum_{k=1}^{n} f(\gamma(\tau_k))\,(\gamma(t_k) - \gamma(t_{k-1})),$$

分割取 $[a, b]$ 的任意加细分割、$\tau_k \in [t_{k-1}, t_k]$ 任意，极限存在且与取法无关；它等于

$$\int_\gamma f(z)\,\mathrm{d}z = \int_a^b f(\gamma(t))\,\gamma'(t)\,\mathrm{d}t,$$
右端是实参数 $t$ 上的复值 Riemann 积分。拆成实部虚部（$f = u + iv$，$z = x + iy$）就是两条实线积分：

$$\int_\gamma f\,\mathrm{d}z = \int_\gamma (u\,\mathrm{d}x - v\,\mathrm{d}y) + i\int_\gamma (v\,\mathrm{d}x + u\,\mathrm{d}y).$$
$\gamma$ 为闭曲线时记 $\oint_\gamma$；反向曲线 $\gamma^{-1}$ 上积分变号：$\int_{\gamma^{-1}} f\,\mathrm{d}z = -\int_\gamma f\,\mathrm{d}z$。

> 续见 [nodes/def.contour-integral.3.md](./def.contour-integral.3.md)
