# 示性类　`def.characteristic-class`　·　说明
根 `../`

**和结构群约化的关系（障碍，不是判据）**：对实丛，$w_{1}(E) = 0$ 当且仅当 $E$ 可定向，即结构群可从 $\mathrm{GL}(k)$ 约化到 $\mathrm{SO}(k)$（`prop.orientable-iff-w1`）；这是等价，不是单向障碍。若 $E$ 已定向，则它带有 $\mathrm{Spin}(k)$ 结构当且仅当 $w_{2}(E) = 0$（双覆盖的提升障碍）。对光滑流形 $M$，旋结构存在当且仅当 $w_{1}(TM) = 0$ 且 $w_{2}(TM) = 0$。⚠ 不要把「某个类消失」一般地当成结构群可约化的充要条件：$w_{2} = 0$ 对**未定向**丛不够，必须先有 $w_{1} = 0$。

**至少一个例子**：Möbius 带 $M$ 的切丛（或它的 tautological 线丛）不可定向（`def.mobius-band`），故 $w_{1}(TM) \ne 0$；这给出「$w_{1}$ 非零所以不能定向」的具体读数。复线丛方面，$\mathbb{CP}^{1}$ 上的 tautological 线丛 $\mathcal{O}(-1)$ 满足 $\int_{\mathbb{CP}^{1}} c_{1}(\mathcal{O}(-1)) = -1$（`prop.chern-class-line-bundle`），于是它的任何正整数次幂都给出不同的陈类 —— 这就是「用示性类区分丛」的样板。

> 续见 notes/def.characteristic-class.3.md
