# 半直积　`def.semidirect-product`　·　说明
根 `../`

**为什么这样乘**：要让 $H \times G$ 成为群、同时让 $H \hookrightarrow H \rtimes_{\varphi} G$ 与 $G \hookrightarrow H \rtimes_{\varphi} G$ 都是群同态，就必须允许 $G$ 在「穿过」$H$ 时把 $H$ 扭曲一次 —— 那个扭曲就是 $\varphi(g_{1})$。

**三条基本性质**：
- 单位元是 $(1_{H}, 1_{G})$，逆元是 $(h, g)^{-1} = \bigl(\varphi(g^{-1})(h^{-1}),\ g^{-1}\bigr)$；
- 有**分裂**的短正合列 $1 \to H \to H \rtimes_{\varphi} G \xrightarrow{\ \pi\ } G \to 1$，截面 $g \mapsto (1_{H}, g)$ 是一个**群同态**；
- $\varphi$ 平凡时 $H \rtimes_{\varphi} G = H \times G$（直积）。

⚠️ **反方向要小心**：有同态截面的短正合列 $1 \to H \to E \xrightarrow{\pi} G \to 1$ 只告诉你 $E$ 是 $H$ 与 $G$ 的**半直积**（当 $H$ 在 $E$ 中正规时有 $E \cong H \rtimes_{\varphi} G$，$\varphi$ 由共轭给出）；但**给定 $G$-模结构后，分裂扩张在相差同构的意义下只有一个**。$H^{1}$ 分类的是**截面的选择**，不是扩张本身 —— 见「一维上同调与分裂扩张」里的警告。
