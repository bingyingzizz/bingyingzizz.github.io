# 闭加细　`prop.paracompact-closed-refinement`　·　说明
根 `../`

**证明。** 由仿紧性取局部有限开加细 $\mathcal{V} = \{ V_{i} \}_{i \in I}$；由定理，$X$ 正规，于是对 $\mathcal{V}$ 用收缩引理得开覆盖 $\{ W_{i} \}$ 使 $\operatorname{cl} W_{i} \subseteq V_{i}$。令 $F_{i} := \operatorname{cl} W_{i}$，则：
- $F_{i}$ 闭，且 $F_{i} \subseteq V_{i} \subseteq$ 某个 $\mathcal{U}$ 的成员（加细的传递性）；
- $\{ F_{i} \}$ 覆盖 $X$（$\{ W_{i} \}$ 已经覆盖）；
- $\{ F_{i} \}$ 局部有限：只碰有限多个 $V_{i}$ 的开邻域也只碰有限多个 $\operatorname{cl} W_{i}$ —— 这里用的是 $\operatorname{cl} W_{i} \subseteq V_{i}$。∎

⭐ **为什么值得单独写一条**：闭加细让「局部有限」可以**逐个成员**去验证（闭族之并仍闭、闭包的运算和覆盖的运算可以交换）。单位分解的构造就是从闭加细开始的：先在闭族与开族的补之间用 Urysohn 引理取函数。

> 续见 notes/prop.paracompact-closed-refinement.2.md
