# 积分的绝对连续性　`cor.ac-integral-continuity`
推论：$\int_E f d\mu$ 在小测度集上任意小
layer 21 · 推论 · 符号测度与分解 · 分析学
[在星图里打开](../#n=cor.ac-integral-continuity)　·　[节点索引](../index.md)

设 $f \in L^1(\mu)$。则

$$\forall\varepsilon > 0, \exists\delta > 0 : \mu(E) < \delta \implies | \int_E f d\mu | < \varepsilon$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/cor.ac-integral-continuity.2.md](./cor.ac-integral-continuity.2.md)

refs: Folland, Real Analysis, Prop. 3.5

## 说明
把「积分给出绝对连续测度」与上一条 $\varepsilon$–$\delta$ 刻画拼起来即可（注意 $f \in L^{1} \implies \nu (E) = \int _E f d\mu$ 是**有限**符号测度，符合前提）。

引用：`cor.ac-integral-continuity`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
