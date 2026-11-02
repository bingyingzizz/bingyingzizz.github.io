# étale 层　`def.etale-sheaf`　·　说明
根 `../`

**「étale」这个名字在两处的关系**：概形的 étale 映射是**同时**满足下列三条的态射：
- 局部有限展示；
- **平坦**；
- **无分歧**（unramified，即 $\Omega^{1}_{U/X} = 0$）。

这三条正是拓扑里「局部同胚」的代数替身，但它额外允许**有限覆叠**（例如 $\operatorname{Spec}\mathbb{C} \to \operatorname{Spec}\mathbb{R}$：两点盖一点）。

**为什么必须换拓扑**：Zariski 拓扑太粗 —— 它在 $\operatorname{Spec} k(t)$ 上看不见 $k$ 的 Galois 覆叠。换成 étale 拓扑之后，$\mathbb{Z}/n$ 这样的系数才看得见几何（Galois 群、Kummer 序列、Weil 猜想那一整套都在这一步之后才有意义）。

⭐ **Zariski 覆盖是 étale 覆盖**（开浸入是 étale 的，且开覆盖当然联合满射）。于是拓扑「变细」、层「变少」：

$$\mathbf{Sh}(X_{\text{et}}, \mathbf{Ab}) \longrightarrow \mathbf{Sh}(X_{\mathrm{Zar}}, \mathbf{Ab})$$

是「忘掉 étale 结构」，**不是**等价。一句话：étale 层一定是 Zariski 层，反之不然。

> 续见 notes/def.etale-sheaf.2.md
