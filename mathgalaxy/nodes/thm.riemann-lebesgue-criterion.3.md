# 可积 ⟺ 不连续点零测　`thm.riemann-lebesgue-criterion`　·　续页（第 3 页）
[在星图里打开](../#n=thm.riemann-lebesgue-criterion)　·　第 1 页 [nodes/thm.riemann-lebesgue-criterion.md](./thm.riemann-lebesgue-criterion.md)　·　上一页 [nodes/thm.riemann-lebesgue-criterion.2.md](./thm.riemann-lebesgue-criterion.2.md)

## 陈述（续）
 $\implies$ 一致连续**（`def.lebesgue-number` 的注里那条路），把 $D$ 挖掉之后剩下的部分可以一致地压振幅。
**为什么两边不对称**：Riemann 积分的定义只用分割，所以“$\implies$”方向是初等的；而“$\Longleftarrow$”方向必须**度量 $D$ 有多小**，那正是测度论的事。这也是历史上 Lebesgue 判据晚于 Riemann 积分出现的原因。
⚠️ **$f$ 有界不能去掉**：无界函数即使不连续点很少也可能不可积（例如 $1/\sqrt{x}$ 在 $(0,1]$ 上：$D = \{0\}$ 是零测的，但它不可积 —— 因为无界，Riemann 和根本无界）。所以判据成立的前提里“有界”与“$D$ 零测”缺一不
可。

> 续见 [nodes/thm.riemann-lebesgue-criterion.4.md](./thm.riemann-lebesgue-criterion.4.md)
