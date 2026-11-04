# 定向与 w1 消失　`prop.orientable-iff-w1`　·　说明
根 `../`

**为什么是 $w_{1}$ 而不是别的**：约化 $\mathrm{GL}(k) \rightsquigarrow \mathrm{SO}(k)$ 等价于「转移函数（`def.transition-function`）可以全部取在 $\mathrm{SO}(k)$ 里」，即行列式处处为正。而行列式取值 $\pm 1$ 给出一个 $\mathbb{Z}/2$-值上闭链 —— 那正是 $w_{1}$：它记的是「绕一圈回来符号是否翻转」。所以 $w_{1} = 0$ 就是「能统一符号」。

⭐ **同一件事的三种说法**：$w_{1} = 0$ $\iff$ 存在处处非零的 $k$-形式（体积形式，`def.orientable-manifold`）$\iff$ 定向双重覆叠 $\tilde B \to B$ 分裂（有截面）。三者互为翻译，但**计算上只有第一条方便** —— 它就是这条命题的价值。

⚠️ **$w_{1}$ 不为零的例子要能举**：$\mathbb{RP}^{2}$ 的切丛 $w_{1} \ne 0$（不可定向），$\mathbb{RP}^{2}$ 上的 tautological 线丛 $w_{1} \ne 0$。而 $S^{2}$、环面都可定向。

> 续见 notes/prop.orientable-iff-w1.2.md
