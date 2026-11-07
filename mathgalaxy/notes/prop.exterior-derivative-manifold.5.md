# 外微分　`prop.exterior-derivative-manifold`　·　说明
根 `../`

**整体构造（存在性）**：取 $M$ 的图卡覆盖 $\{(U_{\alpha}, x_{\alpha})\}$。在每张图卡上用引理 B 定义算子 $D_{\alpha}$。若 $U_{\alpha}\cap U_{\beta}\ne\emptyset$，在重叠开集上 $D_{\alpha}$ 与 $D_{\beta}$ 都满足 (1)–(4)；由引理 A（在 $x_{\alpha}$ 坐标下）$D_{\beta} = D_{\alpha}$。故所有 $D_{\alpha}$ 拼成一个整体算子 $\mathrm{d}$：对 $\omega\in\Omega^{k}(M)$，$\mathrm{d}\omega$ 在 $U_{\alpha}$ 上定义为 $D_{\alpha}(\omega|_{U_{\alpha}})$；重叠处一致，故良定义。(1)–(4) 都是局部性质，已逐图卡验证，故整体成立。

**唯一性**：设 $\mathrm{d}^{\prime}$ 是满足 (1)–(4) 的另一族算子。对任意图卡 $(U,x)$，$\mathrm{d}^{\prime}$ 限制在 $U$ 上满足 (1)–(4)，由引理 A 它等于坐标公式，即等于 $\mathrm{d}$。$U$ 任意，故 $\mathrm{d}^{\prime} = \mathrm{d}$。∎

> 续见 notes/prop.exterior-derivative-manifold.6.md
