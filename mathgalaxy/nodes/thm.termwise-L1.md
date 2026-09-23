# L¹ 的逐项积分　`thm.termwise-L1`
定理：$\sum\int|f_{j}| < \infty \implies \sum f_{j}$ 几乎处处收敛且可逐项积分
layer 19 · 定理 · 积分 · 分析学

设 $\{f_j\} \subseteq L^1$ 满足
> 陈述续见 `nodes/thm.termwise-L1.2.md`


## 为什么成立（入边，证明在 proofs/）
- `thm.termwise-integration` 逐项积分 + `prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零：非负逐项积分 + 零集判定 $\implies L^{1}$ 的逐项积分　proofs/imp.termwise-L1.md

refs: Folland, Real Analysis, Theorem 2.25

## 说明
与「非负函数逐项积分」的区别：那里不需要任何收敛性假设（非负性保证了没有抵消），这里**需要** $\sum \int |f_{j}| < \infty$ —— 用可积性换来「允许有正有负」。

这是 Fubini–Tonelli 定理证明里的关键工具。
