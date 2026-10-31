# 对数与幂的分支　`def.logarithm-branch`　·　说明
根 `../`

⭐ 单值的判据：$z^{\alpha}$ 单值当且仅当 $\alpha \in \mathbb{Z}$。理由：绕一圈多出来的是因子 $e^{2\pi i \alpha}$，它等于 $1$ 当且仅当 $\alpha$ 是整数。于是 $z^{1/n}$ 恰有 $n$ 支，$z^{i}$ 有可数无穷多支。

⭐ 导数：在主值域上 $(\operatorname{Log} z)' = 1/z$。这是反函数定理的结论 —— $\exp$ 在带形 $\{\, |\operatorname{Im} w| < \pi \,\}$ 上是一一的，反函数就是 $\operatorname{Log}$。

⭐ 负实轴上的跳跃：从上方逼近 $-x$（$x > 0$）时 $\operatorname{Arg} \to \pi$，从下方逼近时 $\operatorname{Arg} \to -\pi$，差 $2\pi$。这就是 $\operatorname{Log}$ 必须在 $(-\infty, 0]$ 上开一刀的原因。

⚠ 指数法则会坏：$\log(z_1 z_2) = \log z_1 + \log z_2$ 只在**模 $2\pi i$** 的意义下成立；$(z^{a})^{b} = z^{ab}$ 一般不成立（两边取的对数分支可能不同）。

📌 分支点：$z = 0$ 与 $\infty$ 是对数的分支点 —— 绕它们一圈，函数值回不到原处。$z^{1/n}$ 的分支点也是这两个。
