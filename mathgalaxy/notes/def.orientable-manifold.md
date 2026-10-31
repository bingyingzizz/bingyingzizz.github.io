# 可定向流形　`def.orientable-manifold`　·　说明
根 `../`

**为什么是 Jacobi 行列式的符号**：$\operatorname{GL}(n,\mathbb{R})$ 不连通，恰有两块 —— $\det > 0$ 与 $\det < 0$。换卡就是乘一个 $\operatorname{GL}(n,\mathbb{R})$ 里的元素；符号能否保持不变是**整体**问题，一张卡内部永远没问题。

**两个定向**：连通可定向流形上，「定向图册」只有两种极大化结果。所以「取定定向」只有二选一，不存在第三个。不连通时每个连通分支独立二选一，共 $2^{c}$ 个（$c$ 为连通分支数，与 `thm.de-rham-h0` 里那个 $c$ 是同一个）。

**不可定向的例子**：Möbius 带、$\mathbb{RP}^{2}$、Klein 瓶。判据是「存在一条闭环，沿它走一圈坐标牌的定向翻了过来」—— 即存在**反序回路**。亏格 $g$ 的可定向闭曲面都存在，$\mathbb{RP}^{2}$ 不存在。

> 续见 notes/def.orientable-manifold.2.md
