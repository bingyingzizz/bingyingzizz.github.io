# 单纯对象　`def.simplicial`　·　说明
根 `../`

所以「单纯对象」在纸面上永远是一串对象 $X_{0}, X_{1}, \ldots$ 加上面映射 $d_{i}$ 与退化映射 $s_{i}$ —— 范畴语言只是把这串数据与其相容性一次说清。

**例 1（标准单纯形）**：$X = \operatorname{Hom}_{\Delta}(-,[n])$ 是单纯集，$X_{k}$ 恰是「$[k]$ 中的保序嵌入数」，几何实现就是标准的 $n$-单形。

**例 2（奇异单纯集）**：拓扑空间 $T$ 给出 $S_{\bullet}(T) : [n] \mapsto \operatorname{Hom}_{\mathbf{Top}}(\Delta^{n}, T)$，即「$T$ 中的 $n$-奇异单形」；它的链群就是奇异链群。所以奇异同调不是另一套理论，而是单纯对象取链复形。

**例 3（单纯集 = 预层）**：$\mathcal{C} = \mathbf{Set}$ 时，单纯对象就是 $\Delta^{\mathrm{op}}$ 上的预层（presheaf）。几何实现是余极限 $|X| = \varinjlim_{[k] \to X} \Delta^{k}$（把每个 $k$-单形按面关系粘起来）—— 「$X$ 在 $k$ 维有几个单形、怎么粘」全由 $X_{k}$ 与 $d_{i}, s_{i}$ 记录。

> 续见 notes/def.simplicial.3.md
