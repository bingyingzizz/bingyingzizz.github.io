# 紧子集是闭的　`prop.compact-subset-closed`　·　说明
根 `../`

其实只要 $X$ 是 Hausdorff 空间，紧子集就是闭的；距离空间自然 Hausdorff。

把它和「$X$ 完备」放在一起，正是为了下面那条**子集**的紧性刻画做准备：那条要用「$A$ 紧 $\implies A$ 闭」和「$A$ 闭 $X$ 完备 $\implies A$ 完备」。

**证明。** 设 $A$ 紧，取 $x \in X\setminus A$ 要证它是内点。
- 对每个 $a \in A$，由 Hausdorff 性取 $a$ 的开邻域 $U_{a}$ 与 $x$ 的开邻域 $V_{a}$ 使 $U_{a}\cap V_{a} = \emptyset$（距离空间里取 $U_{a} = B(a, r/2)$、$V_{a} = B(x, r/2)$，$r = d(a,x)$）；
- $\{U_{a}\}_{a\in A}$ 是 $A$ 的开覆盖，由**紧性**取有限子覆盖 $U_{a_{1}}, \ldots, U_{a_{n}}$；
- $V := \bigcap_{i=1}^{n} V_{a_{i}}$ 是 $x$ 的开邻域，且 $V\cap U_{a_{i}} = \emptyset$ 对每个 $i$ 成立，故 $V \cap A = \emptyset$，即 $V \subseteq X\setminus A$ ✓。
于是 $X\setminus A$ 开，$A$ 闭。∎
