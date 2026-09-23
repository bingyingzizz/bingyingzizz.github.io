# 积分的绝对连续性　`cor.ac-integral-continuity`
推论：$\int_E f d\mu$ 在小测度集上任意小
layer 20 · 推论 · 符号测度与分解 · 分析学

设 $f \in L^1(\mu)$。则
> 陈述续见 `nodes/cor.ac-integral-continuity.2.md`


## 为什么成立（入边，证明在 proofs/）
- `prop.integral-gives-ac` 积分给出绝对连续测度：积分给出绝对连续测度 $\implies$ 积分的绝对连续性　proofs/imp.integral-ac-continuity.md
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integrable-ac-integral.md
- `def.absolute-continuity` 绝对连续：用到了定义 绝对连续　proofs/def-link.ac-integral-continuity.md

refs: Folland, Real Analysis, Prop. 3.5

## 说明
把「积分给出绝对连续测度」与上一条 $\varepsilon$–$\delta$ 刻画拼起来即可（注意 $f \in L^{1} \implies \nu (E) = \int _E f d\mu$ 是**有限**符号测度，符合前提）。
