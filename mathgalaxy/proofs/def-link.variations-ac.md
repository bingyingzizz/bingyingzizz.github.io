# Jordan 分解 $\implies$ 绝对连续性对变差与正负部逐块判定
`def-link.variations-ac` · 推出 · strong 边 · 根 `../`

`thm.jordan-decomposition` Jordan 分解定理 → `prop.ac-and-variations` 绝对连续与变差

命题的第一组等价要把 $\nu$ 拆成 $\nu = \nu^{+} - \nu^{-}$、把 $\lvert\nu\rvert = \nu^{+} + \nu^{-}$ —— 这两条等式正是 **Jordan 分解定理**给出的（连同 $\nu^{\pm}$ 的构造）。有了它们，对任意可测 $E$：$\lvert\nu\rvert(E) = \nu^{+}(E) + \nu^{-}(E)$、$\nu(E) = \nu^{+}(E) - \nu^{-}(E)$，于是「$\mu(E)=0 \implies \lvert\nu\rvert(E)=0$」与「$\mu(E)=0 \implies \nu^{\pm}(E)=0$」互相推出（$\nu^{\pm}\le \lvert\nu\rvert$ 且 $\nu^{\pm}$ 非负），即 $\nu\ll\mu \iff \lvert\nu\rvert\ll\mu \iff \nu^{\pm}\ll\mu$。

> AUD-061 A 类。原记 definition；改 imp：命题的陈述与证明都建立在 Jordan 分解给出的 $\nu^{\pm}$、$\lvert\nu\rvert$ 之上。
