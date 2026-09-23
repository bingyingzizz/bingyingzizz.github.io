# 正集 / 负集 / 零集　`def.positive-negative-null`
正集 / 负集 / 零集（Positive, Negative, Null Set）
layer 15 · 定义 · 符号测度与分解 · 分析学

设 $\nu$ 是符号测度，$E \in \mathcal{M}$。
> 陈述续见 `nodes/def.positive-negative-null.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.signed-measure` 符号测度：用到了定义 符号测度　proofs/def-link.signed-positive.md

## 它能推出什么 / 谁在用它
- 被 `thm.hahn-decomposition` Hahn 分解定理 用
- 被 `prop.positive-set-closure` 正集的封闭性 用

refs: Folland, Real Analysis, §3.1

## 说明
⚠ 注意「正集」不是「$\nu (E) > 0$ 的集合」—— 它要求 **$E$ 的每一个可测子集**都非负。

⚠ 与 $\mu$零集区分：这里的「零集」是关于符号测度 $\nu$ 说的（$\nu(F) = 0$），不是关于测度 $\mu$ 的。
