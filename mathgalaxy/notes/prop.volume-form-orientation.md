# 定向与体积形式　`prop.volume-form-orientation`　·　说明
根 `../`

**证明的两半**：$(\implies)$ 在每张保向卡上取 $\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$，它换卡时乘一个**正**的光滑函数，故能用单位分解加成一个整体的 $\omega$，正系数保证不归零；$(\Longleftarrow)$ 给一个处处非零的 $\omega$，在某张卡上它等于 $f\,\mathrm{d}x^{1}\wedge\cdots\wedge\mathrm{d}x^{n}$ 且 $f$ 处处非零，把所有 $f < 0$ 的卡换成反序坐标 —— 于是全族的转移 Jacobi 行列式都为正，得到定向图册。细节在边上。

**为什么这里逃不掉单位分解**：局部造的东西只有「正函数倍」的自由度，没有抵消机制 —— 求和时正系数保证不会归零。所以这条是 `thm.smooth-partition-unity` 最标准的用法之一。

**线丛的语言**：$\bigwedge^{n}T^{\ast}M$ 是秩 $1$ 的线丛（叫**定向丛**），$\omega$ 就是它的处处非零截面。所以「可定向」与「定向丛平凡」是同一条陈述的两种说法 —— 这与 `def.bundle-section` 里「有处处非零截面就等价于丛平凡」是同一个判据。

> 续见 notes/prop.volume-form-orientation.2.md
