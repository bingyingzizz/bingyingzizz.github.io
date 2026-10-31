# Ab(C) 的极限　`prop.ab-limits-forgetful`　·　说明
根 `../`

**证明（极限在遗忘函子下逐项算）。** 阿贝尔群对象的定义是一组态射与**交换图**：
$$m : X \times X \to X, \qquad e : 1 \to X, \qquad i : X \to X$$
配上一串等式（结合、单位、逆、交换性）—— 全是「两个复合相等」形式的图。
- 设 $D : I \to \mathrm{Ab}(\mathcal{C})$ 是可图表，记 $UX$ 为 $X$ 的底对象。因为极限保持极限（特别地保持有限积与终对象），把上述各图和等式逐项送进 $\mathcal{C}$ 后仍然成立；于是底对象上的 $\lim UD$ **自动**带上阿贝尔群对象的结构，$m$ 取 $\lim (Um \circ \text{交换}) $、$e$ 取 $\lim Ue$。
- 于是 $\mathrm{Ab}(\mathcal{C})$ 有 $I$-极限，而遗忘函子把它送到 $\mathcal{C}$ 里的 $\lim UD$ —— 即**保极限**。
- 细节只在一处：$\lim$ 与有限积的交换（$U \lim = \lim U$ 与 $\lim(X_{i}\times Y_{i}) = \lim X_{i}\times \lim Y_{i}$），那是极限的一般性质。∎
