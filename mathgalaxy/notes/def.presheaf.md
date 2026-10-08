# 预层　`def.presheaf`　·　说明
根 `../`

直白的说法：**每个对象指定一个数据，每条态射指定一个「限制」**。反变是为了让「更小的对象拿到更多的数据」—— 越往子结构走，限制越多。

例：



- 偏序集上：对每个 $i$ 给一个 $T_i$，对 $i \le j$ 给「限制」$T_j \to T_i$（把反对称性去掉，预序集上同样成立）。
- 拓扑空间上：$\operatorname{Open}(X)$ 是开集范畴（态射是含入），预层给每个开集 $u$ 一个 $T(u)$，给 $u' \subseteq u$ 一个「限制」$T(u) \to T(u')$，$s \mapsto s|_{u'}$。连续函数预层 $C^{0}$、光滑函数预层 $C^{\infty}$、常预层 $\underline{E}$（$\underline{E}(u) = E$，限制取恒等）、常函数预层都是。
- 固定 $X \in \mathcal{C}$：$h_{X} : Y \mapsto \operatorname{Hom}_{\mathcal{C}}(Y, X)$ 是预层，叫**可表示预层**。
