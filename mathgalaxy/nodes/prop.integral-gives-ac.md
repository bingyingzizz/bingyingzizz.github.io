# 积分给出绝对连续测度　`prop.integral-gives-ac`
命题：$\nu(E) = \int_E f d\mu$ 关于 $\mu$ 绝对连续
layer 19 · 命题 · 符号测度与分解 · 分析学

设 $\mu$ 是测度，$f$ 是广义 $\mu$可积函数，定义

$$\nu(E) := \int_E f d\mu$$
> 陈述续见 `nodes/prop.integral-gives-ac.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.integrable` 可积 / L¹：用到了定义 可积 / L¹　proofs/def-link.integral-ac.md

## 它能推出什么 / 谁在用它
- ⇒ `prop.rn-chain-rule` RN 导数的链式法则
- ⇒ `cor.ac-integral-continuity` 积分的绝对连续性

refs: Folland, Real Analysis, §3.2

## 说明
这是绝对连续测度的**标准来源**，也是 Radon–Nikodym 定理要反过来证明的那件事：**所有**绝对连续的 $\nu$ 都长这个样子。

记法上常写成微分形式：



$$\nu(E) = \int_E f d\mu\quad  \iff\quad  d\nu = f d\mu$$
