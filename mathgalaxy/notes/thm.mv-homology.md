# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

**证明**：分五步。① 挑出「每条小单纯形整体落在 $U$ 或 $V$ 里」的链，得到子复形；② 用重心重分证明这个子复形到全复形的包含在同调上是同构（全部难点）；③ 把子复形拆成 $U$ 的链与 $V$ 的链之和；④ 对短正合列接长正合列；⑤ 把 ② 代进去。

**小链。** 称奇异单纯形 $\sigma : \Delta^{p} \to X$ 关于覆盖 $\{U, V\}$ **小**，如果 $\sigma(\Delta^{p}) \subseteq U$ 或 $\sigma(\Delta^{p}) \subseteq V$。小单纯形的有限和组成子群 $S^{\mathcal{U}}_{p}(X) \subseteq S_{p}(X)$；边缘算子保持小性（面仍落在同一个集合里），故 $S^{\mathcal{U}}_{*}(X)$ 是子复形。记 $\iota : S^{\mathcal{U}}_{*}(X) \hookrightarrow S_{*}(X)$。

**第一步：重分链映射。** 在标准单纯形 $\Delta^{p}$ 上递归定义两个链：

$$\operatorname{sd}_{0} := [v_{0}],\qquad \operatorname{sd}_{p} := [b_{p},\ \operatorname{sd}_{p-1}(\partial\Delta^{p})],$$

> 续见 notes/thm.mv-homology.2.md
