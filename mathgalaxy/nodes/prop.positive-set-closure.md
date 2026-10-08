# 正集的封闭性　`prop.positive-set-closure`
命题：正集的可测子集仍是正集；可数个正集之并仍是正集
layer 16 · 命题 · 符号测度与分解 · 分析学

设 $\nu$ 是符号测度。

- 正集的每个可测子集都是正集；
- **可数多个正集之并仍是正集**。

## 为什么成立（入边，证明在 proofs/）
- `def.positive-negative-null` 正集 / 负集 / 零集：用到了定义 正集 / 负集 / 零集　proofs/def-link.posneg-positive-closure.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.hahn-decomposition` Hahn 分解定理

refs: Folland, Real Analysis, Lemma 3.1

## 说明
第一条由定义直接得到。

第二条是 Hahn 分解证明里反复用到的技术步骤：把可数多个正集 $P_1, P_2, \ldots $ 不交化（$P_j' = P_j \setminus \bigcup_{i<j} P_i$，正集之差仍是正集），再用可数可加性逐块验证。
