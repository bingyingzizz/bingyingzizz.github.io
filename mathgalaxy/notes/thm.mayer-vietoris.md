# Mayer–Vietoris 序列　`thm.mayer-vietoris`　·　说明
根 `../`

**证明**。写 $W = U \cap V$，记 $\Omega^{k}$ 为对应开集上的 de Rham 复形。先造链复形的短正合列，再取上同调。

**第一步：短正合列**。限制与差给出 

$$0 \to \Omega^{k}(M) \xrightarrow{\ r\ } \Omega^{k}(U) \oplus \Omega^{k}(V) \xrightarrow{\ s\ } \Omega^{k}(W) \to 0,$$

$$r(\omega) = (\omega|_{U}, \omega|_{V}),\qquad s(\omega_{U}, \omega_{V}) = \omega_{U}|_{W} - \omega_{V}|_{W}.$$

 $r$ 单：$r(\omega) = 0$ 说明 $\omega$ 在 $U$ 与 $V$ 上都为零，而 $M = U \cup V$。$s$ 满：取从属于 $\{U, V\}$ 的光滑单位分解 $\rho_{U} + \rho_{V} = 1$（`thm.smooth-partition-unity`，$\operatorname{supp}\rho_{U} \subseteq U$、$\operatorname{supp}\rho_{V} \subseteq V$）。对 $\omega \in \Omega^{k}(W)$ 令 

$$a_{U} := \rho_{V}\omega \ \text{在}\ U\ \text{上（在}\ U \setminus W\ \text{外延拓为}\ 0\text{）}\qquad a_{V} := -\rho_{U}\omega \ \text{在}\ V\ \text{上（延拓为}\ 0).$$

> 续见 notes/thm.mayer-vietoris.2.md
