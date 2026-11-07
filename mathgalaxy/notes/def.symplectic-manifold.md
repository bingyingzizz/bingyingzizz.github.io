# 辛流形　`def.symplectic-manifold`　·　说明
根 `../`

⚠️ **「闭」这条不能去**：非退化 2-形式总是逐点存在（余切丛上就有），但「闭」是**整体**条件。去掉它得到的是「近辛流形」（almost symplectic）：有非退化 2-形式而不要求闭（那门理论完全不同）。⚠ 「可积」是 almost complex 结构的性质 —— 要再配一个 almost complex 结构才谈得上，与近辛本身的定义无关。$S^{6}$ 是「近辛但非辛」的标准例子。

⭐ **为什么物理学需要它**：$\omega$ 给出「Hamilton 流」（`def.hamiltonian-vector-field`），而 $d\omega = 0$ 保证这些流**保持 $\omega$**（Lie 导数 $\mathcal{L}_{X_{H}}\omega = 0$）—— 这就是 Liouville 定理（相体积守恒）的根子。

⚠️ 辛流形**必可定向**（$\omega^{n}$ 是无处为零的体积形式），但**不必**是 Kähler：Kähler 还要额外的复结构与相容度量。辛几何是比 Kähler 更宽的一层。

> 续见 notes/def.symplectic-manifold.2.md
