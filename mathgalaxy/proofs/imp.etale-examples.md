# étale 层的定义 $\implies$ 开浸入、有限 étale 覆叠、常值层都是层
`imp.etale-examples` · 推出 · strong 边 · 根 `../`

`def.etale-sheaf` étale 层 + `def.etale-space` étale 空间 → `prop.etale-sheaf-examples` étale 层的例子

**准备：层条件要验什么。** 由定义，$\mathcal{F}$ 是 étale 层 $\iff$ 对每个联合满射的 étale 族 $\{U_{i} \to U\}$，$\mathcal{F}(U) \to \prod_{i}\mathcal{F}(U_{i}) \rightrightarrows \prod_{i,j}\mathcal{F}(U_{i}\times_{U}U_{j})$ 正合。

下面逐个验。

**① 开浸入与 Zariski 覆盖。** 开浸入是平坦的（开集上的模在 $R^{\prime}$ 上还是模，局部化正合）、无分歧的（$\Omega^{1}_{U/U} = 0$ 且局部同构于一），且局部有限展示，故是 étale 映射。

于是 Zariski 覆盖 $\{U_{i} \to U\}$ 的每个成员都是 étale 映射、族联合满射，是一个 étale 覆盖。

> 续见 proofs/imp.etale-examples.2.md
