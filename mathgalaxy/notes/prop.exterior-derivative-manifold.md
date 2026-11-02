# 外微分　`prop.exterior-derivative-manifold`　·　说明
根 `../`

**证明的两半**：存在性 = 「图卡上按公式定义 + 重叠处一致 + 用单位分解拼成整体」；唯一性 = 「局部公式 + 反导子公理 + $\mathrm{d}^{2}=0$」。骨架在边上，⚠️ 收尾那一步（单位分解的拼接为什么只有有限项、为什么拼出来的东西仍满足 (3)(4)）只给到提纲。

**这是 Tu 的处理顺序**：先有开集上的坐标公式（`def.exterior-derivative`），再用「与拉回交换」（`prop.pullback-forms` 的第 3 条）证明图卡无关。也可以反过来把「与拉回交换」当公理（一堆教材这么做），但那样就得另证存在性，且难以看出 $\mathrm{d}$ 为什么长这样。

⭐ 有了这一条，`def.de-rham-complex` 里那串 $\Omega^{k}(M)\xrightarrow{\ \mathrm{d}\ }\Omega^{k+1}(M)$ 才真的是一串映射 —— 在这条之前，那串东西只是记号。

> 续见 notes/prop.exterior-derivative-manifold.2.md
