# 体积形式　`def.volume-form`　·　续页（第 2 页）
[在星图里打开](../#n=def.volume-form)　·　第 1 页 [nodes/def.volume-form.md](./def.volume-form.md)

## 陈述（续）
设 $M$ 是 $n$ 维光滑流形。**体积形式**是处处非零的 $n$-形式 $\omega \in \Omega^{n}(M)$（即 $\omega_{p} \ne 0$ 对每个 $p$ 成立）。
若 $M$ 还带黎曼度量 $g$（`def.riemannian-metric`）与一个定向，则**黎曼体积形式**在每张保向卡里写成
$$\mathrm{d}V_{g} := \sqrt{\det\bigl(g_{ij}\bigr)}\ \mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n},\qquad g_{ij} = g\Bigl(\frac{\partial}{\partial x^{i}},\frac{\partial}{\part
ial x^{j}}\Bigr).$$
在**保向正交余标架** $\{\theta^{1},\ldots,\theta^{n}\}$（即 $g = \sum_{i}(\theta^{i})^{2}$）下它化简成没有系数的样子

$$\mathrm{d}V_{g} = \theta^{1}\wedge\cdots\wedge\theta^{n}.$$
于是可积的函数有体积与积分

$$\operatorname{vol}(M) := \int_{M}\mathrm{d}V_{g},\qquad \int_{M}f\,\mathrm{d}V_{g},$$

积分按 `def.integral-form` 的「定向形式积分」定义。

> 续见 [nodes/def.volume-form.3.md](./def.volume-form.3.md)
