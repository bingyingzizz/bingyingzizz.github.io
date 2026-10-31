# 解析延拓　`def.analytic-continuation`　·　续页（第 2 页）
[在星图里打开](../#n=def.analytic-continuation)　·　第 1 页 [nodes/def.analytic-continuation.md](./def.analytic-continuation.md)

## 陈述（续）
设 $\gamma : [0, 1] \to \mathbb{C}$ 是曲线，$\gamma(0)$ 是某个元素 $(f_{0}, D_{0})$ 的
圆心。$\gamma$ 上的一个**解析延拓链**是一族元素 $(f_{t}, D_{t})$（$t \in [0,1]$
），满足：
1. $\gamma(t)$ 是 $D_{t}$ 的圆心；
2. 对每个 $t$ 存在 $\delta > 0$，使 $|s - t| < \del
ta$ 时 $D_{s} \cap D_{t} \ne \emptyset$ 且$f_{s} = f_{t}$ 在交集上；
3. $f_{t}$ 关于 $t$ 
连续（在重叠部分）。
沿所有从 $\gamma(0)$ 出发的曲线延拓出来的全部元素，把重叠的粘起来，得
到的对象叫**完全解析函数**（它一般是一个多值函数，落在 `def.riemann-surfa
ce` 那张曲面上）。

> 续见 [nodes/def.analytic-continuation.3.md](./def.analytic-continuation.3.md)
